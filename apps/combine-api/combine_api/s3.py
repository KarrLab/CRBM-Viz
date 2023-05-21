from botocore.exceptions import ClientError
from typing import Optional, Iterator
import boto3
from boto3_type_annotations.s3 import Client, ServiceResource
import datetime
import dateutil.tz
import typing
import uuid
from os import environ
from combine_api.app_config import (
  ENVVAR_TEMP_STORAGE_MAX_AGE,
  ENVVAR_STORAGE_ENDPOINT,
  ENVVAR_STORAGE_ACCESS_KEY,
  ENVVAR_STORAGE_SECRET,
  ENVVAR_TEMP_STORAGE_BUCKET
)

__all__ = [
    'S3Bucket',
    'get_s3_bucket',
    'save_temporary_combine_archive_to_s3_bucket',
    'delete_temporary_files_in_s3_bucket',
]

s3_bucket = None

TEMP_STORAGE_MAX_AGE = int(float(environ.get(ENVVAR_TEMP_STORAGE_MAX_AGE, '1')))


class S3Bucket(object):
    bucket = None
    bucket_name = None
    endpoint: Optional[str] = ""

    def __init__(self) -> None:
        self.validate_configuration()
        self.endpoint = environ.get(ENVVAR_STORAGE_ENDPOINT)
        self.bucket_name = environ.get(ENVVAR_TEMP_STORAGE_BUCKET)

        s3: ServiceResource = boto3.resource('s3',
                                             endpoint_url=environ.get(ENVVAR_STORAGE_ENDPOINT),
                                             aws_access_key_id=environ.get(ENVVAR_STORAGE_ACCESS_KEY),
                                             aws_secret_access_key=environ.get(ENVVAR_STORAGE_ACCESS_KEY),
                                             verify=False)
        self.client: Client = boto3.client('s3',
                                           endpoint_url=environ.get(ENVVAR_STORAGE_ENDPOINT),
                                           aws_access_key_id=environ.get(ENVVAR_STORAGE_ACCESS_KEY),
                                           aws_secret_access_key=environ.get(ENVVAR_STORAGE_ACCESS_KEY),
                                           verify=False,
                                           )
        self.bucket = s3.Bucket(environ.get(ENVVAR_TEMP_STORAGE_BUCKET))

    def upload_file(self, filename: str, key: str, public: bool) -> str:
        """ Upload a local file to a key in the bucket

        Args:
            filename (:obj:`str`): local path to the file to upload
            key (:obj:`str`): key to save the file at in the bucket
            public (:obj:`bool`): whether to make the file publicly readable

        Returns:
            :obj:`str`: public URL for the file
        """
        if public:
            extra_args = {'ACL': 'public-read'}
        else:
            extra_args = {}

        assert self.bucket is not None
        assert self.endpoint is not None
        assert self.bucket_name is not None
        self.bucket.upload_file(filename, str(key), ExtraArgs=extra_args)
        return self.endpoint + '/' + self.bucket_name + '/' + str(key)

    def download_file(self, key: str, filename: str) -> None:
        """ Download a file from a key in the bucket to a local path

        Args:
            key (:obj:`str`): key to save the file at in the bucket
            filename (:obj:`str`): local path to the file to upload
        """
        assert self.bucket is not None
        self.bucket.download_file(Key=key, Filename=filename)

    def is_file(self, key: str) -> bool:
        """ Determine whether the bucket has a file at a key

        Args:
            key (:obj:`str`): key for the file in the bucket

        Returns:
            :obj:`dict`: whether the bucket has a file with the queried key
        """
        try:
            self.get_file_properties(key)
            return True
        except ClientError as exception:
            if exception.response['Error']['Code'] == 'NoSuchKey':
                return False
            raise exception

    def get_file_properties(self, key: str) -> typing.Dict:
        """ Get the properties of a file in the bucket

        Args:
            key (:obj:`str`): key for the file in the bucket

        Returns:
            :obj:`boto3.resources.factory.s3.ObjectSummary`: file properties
        """
        return self.client.get_object(Bucket=self.bucket_name, Key=key)

    def list_files(self, prefix: Optional[str] = None, max_last_modified: Optional[datetime.datetime] = None,
                   max_files: Optional[int] = None) -> Iterator[str]:
        """ List the files in the bucket or beneath a prefix in the bucket

        Args:
            prefix (:obj:`str`, optional): path beneath which to get files
            max_last_modified (:obj:`datetime.datetime`, optional): maximum accepted last modifification date
            max_files (:obj:`int`, optional): maximum number of files to get

        Returns:
            :obj:`generator` of :obj:`str`: generator of keys for the the files in the bucket or beneath the prefix
        """
        marker = ''
        while True:
            objects = self.client.list_objects(Bucket=self.bucket_name, Prefix=prefix, Marker=marker, MaxKeys=max_files or 1000)
            for object in objects.get('Contents', []):
                if max_last_modified is None or object['LastModified'] <= max_last_modified:
                    yield object['Key']

            marker = objects.get('NextMarker', objects.get('Contents', [])[-1]['Key'] if objects.get('Contents', []) else None)
            if max_files or not objects['IsTruncated']:
                break

    def delete_file(self, key: str) -> None:
        """ Delete a file in the bucket

        Args:
            key (:obj:`str`): key for the file to delete
        """
        self.client.delete_object(
            Bucket=self.bucket_name,
            Key=key,
        )

    def delete_files_with_prefix(self, prefix: str, max_last_modified: Optional[datetime.datetime] = None) -> None:
        """ Delete files with a prefix in the bucket

        Args:
            prefix (:obj:`str`): prefix for the files to delete
            max_last_modified (:obj:`datetime.datetime`, optional): maximum accepted last modifification date
        """
        while True:
            keys = list(self.list_files(prefix, max_last_modified=max_last_modified, max_files=1000))
            if keys:
                self.client.delete_objects(
                    Bucket=self.bucket_name,
                    Delete={
                        'Objects': [{'Key': key} for key in keys]
                    }
                )
            else:
                break  # pragma: no cover

    @staticmethod
    def validate_configuration():
        errors = []

        if not environ.get(ENVVAR_STORAGE_ENDPOINT, None):
            errors.append(f"Storage endpoint (`{ENVVAR_STORAGE_ENDPOINT}`) must be set")
        if not environ.get(ENVVAR_TEMP_STORAGE_BUCKET, None):
            errors.append(f"Storage bucket (`{ENVVAR_TEMP_STORAGE_BUCKET}`) key must be set")
        if not environ.get(ENVVAR_STORAGE_ACCESS_KEY, None):
            errors.append(f"Storage access key (`{ENVVAR_STORAGE_ACCESS_KEY}`) must be set")
        if not environ.get(ENVVAR_STORAGE_ACCESS_KEY, None):
            errors.append(f"Storage secret (`{ENVVAR_STORAGE_SECRET}`) must be set")

        if errors:
            raise ValueError('The configuration for the S3 bucket is not valid:\n  {}'.format('\n  '.join(errors)))


def get_s3_bucket():
    """ Get S3 bucket

    Returns:
        :obj:`S3Bucket`: S3 bucket
    """
    global s3_bucket
    if s3_bucket is None:
        s3_bucket = S3Bucket()
    return s3_bucket


def save_temporary_combine_archive_to_s3_bucket(filename, public=False, id=None):
    """ Save a file to the BioSimulations S3 bucket

    Args:
        filename (:obj:`str`): path of file to save to S3 bucket

    Returns:
        :obj:`str`: URL for saved file
    """
    s3_bucket = get_s3_bucket()

    if id is None:
        id = str(uuid.uuid4())

    url = s3_bucket.upload_file(filename, key=id, public=public)

    return url


def delete_temporary_files_in_s3_bucket(min_age=TEMP_STORAGE_MAX_AGE):
    """ Delete the temporary COMBINE/OMEX archives stored in the S3 bucket

    Args:
        min_age (:obj:`int`, optional): minimum file age for deletion in days
    """
    s3_bucket = get_s3_bucket()
    now = datetime.datetime.utcnow().replace(tzinfo=dateutil.tz.tzutc())
    s3_bucket.delete_files_with_prefix(
        prefix='',
        max_last_modified=(
            now - datetime.timedelta(days=min_age)
            if min_age is not None else
            None
        ),
    )