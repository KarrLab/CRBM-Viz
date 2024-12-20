import functools
import uuid
from os import environ

import connexion
import flask.json
import orjson
import yaml  # type: ignore
from connexion.apps.flask_app import FlaskApp
from flask_cors import CORS
from swagger_ui_bundle import swagger_ui_3_path

from combine_api import app_config
from combine_api import exceptions

env = environ.get(app_config.ENVVAR_ENV, 'dev') or 'dev'

spec_dirname = 'spec'
spec_filename = 'spec.yml'

# Instantiate app from OpenAPI specifications
options = {
  'swagger_path': swagger_ui_3_path,
  "swagger_ui": True,
  "swagger_url": "/"
}

app: FlaskApp = connexion.App(__name__, specification_dir=spec_dirname, options=options)

# Set up handlers for APIs
app.add_api(spec_filename,
            strict_validation=True,
            validate_responses=False)

# set maximum file upload size
app.app.config['MAX_CONTENT_LENGTH'] = float(environ.get('MAX_CONTENT_LENGTH', 1.1 * 1e9))  # bytes


class FastJSONEncoder(flask.json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, uuid.UUID):
            return str(obj)
        return flask.json.JSONEncoder.default(self, obj)

    def encode(self, o):
        return str(orjson.dumps(o), 'utf-8')


app.app.json_encoder = FastJSONEncoder


# Validate_response = True will give error when API returns something that
# does not match the schema. If you want to send a response even if invalid,
# set to false. Set to false in production if optimistic that client can
# handle the response better than getting error.

# :obj:`validate_responses` is set to obj:`False` because responses are
# validated by the unit tests using openapi-core.

app.add_error_handler(413, functools.partial(
    exceptions._render_exception,
    title='Request too large',
    detail='Request was larger than the {} MB limit.'.format(round(app.app.config['MAX_CONTENT_LENGTH'] * 1e-6))))
app.add_error_handler(500, functools.partial(
    exceptions._render_exception,
    title='Server error'))
app.add_error_handler(exceptions.BadRequestException, exceptions._render_exception)
app.add_error_handler(exceptions.RequestTimeoutException, exceptions._render_exception)

# enable cross-origin resource sharing
CORS(app.app,
     origins=[
         'http://127.0.0.1:4200',
         'http://127.0.0.1:4201',
         'http://127.0.0.1:4202',
         'http://localhost:4200',
         'http://localhost:4201',
         'http://localhost:4202',
         'https://biosimulators.org',
         'https://www.biosimulators.org',
         'https://biosimulators.dev',
         'https://www.biosimulators.dev',
         'https://run.biosimulations.dev',
         'https://run.biosimulations.org',
         'https://biosimulations.dev',
         'https://biosimulations.org',
         'https://bio.libretexts.org',
     ])
