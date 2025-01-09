import os
from datetime import datetime
from json import dumps as json_dumps
from pathlib import Path
from urllib.parse import quote

import pytest
from fastapi.testclient import TestClient

from simdata_api.config import get_settings
from simdata_api.datamodels import HDF5File, StatusResponse, Status, DatasetData
from simdata_api.main import app

client = TestClient(app)
ROOT_DIR = Path(__file__).parent.parent


@pytest.mark.asyncio
async def test_root():
    response = client.get("/")
    data = response.json()
    assert data == {"message": "Hello from simdata-api"}


@pytest.mark.asyncio
async def test_health():
    response = client.get("/health")
    data = response.json()
    assert StatusResponse.model_validate_json(
        response.content.decode("utf-8")
    ) == StatusResponse(status=Status.ok)
    assert StatusResponse.model_validate_strings(data) == StatusResponse(
        status=Status.ok
    )


@pytest.mark.skipif(os.path.exists(get_settings().storage_gcs_credentials_file) is False,
                    reason="STORAGE_GCS_CREDENTIALS_FILE not found")
@pytest.mark.asyncio
async def test_read_dataset_from_outputs_dir():
    RUN_ID = "64863d6fb933577dfcdf172c"  # reports.h5 only in outputs dir
    DATASET_NAME = quote("BIOMD0000000001_url.sedml/autogen_report_for_task1", safe="")
    url = f"/datasets/{RUN_ID}/data?dataset_name={DATASET_NAME}"
    response = client.get(url)
    data = response.json()
    assert response.status_code == 200
    assert data["shape"] == [66, 1001]
    settings = get_settings()
    LOCAL_PATH = Path(settings.storage_local_cache_dir) / f"{RUN_ID}.h5"
    assert LOCAL_PATH.exists() is False


@pytest.mark.skipif(os.path.exists(get_settings().storage_gcs_credentials_file) is False,
                    reason="STORAGE_GCS_CREDENTIALS_FILE not found")
@pytest.mark.asyncio
async def test_read_dataset_from_contents_dir():
    RUN_ID = "61fd573874bc0ce059643515"  # reports.h5 only in contents dir
    DATASET_NAME = quote("simulation_1.sedml/report", safe="")
    url = f"/datasets/{RUN_ID}/data?dataset_name={DATASET_NAME}"
    response = client.get(url)
    data = response.json()
    assert response.status_code == 200
    assert data["shape"] == [21, 201]
    settings = get_settings()
    LOCAL_PATH = Path(settings.storage_local_cache_dir) / f"{RUN_ID}.h5"
    assert LOCAL_PATH.exists() is False


@pytest.mark.skipif(os.path.exists(get_settings().storage_gcs_credentials_file) is False,
                    reason="STORAGE_GCS_CREDENTIALS_FILE not found")
@pytest.mark.asyncio
async def test_read_dataset_not_found():
    RUN_ID = "1234567"
    DATASET_NAME = quote("simulation_1.sedml/report", safe="")
    url = f"/datasets/{RUN_ID}/data?dataset_name={DATASET_NAME}"
    response = client.get(url)
    assert response.status_code == 404
    assert response.json()['detail'] == "Dataset not found"


@pytest.mark.skipif(os.path.exists(get_settings().storage_gcs_credentials_file) is False,
                    reason="STORAGE_GCS_CREDENTIALS_FILE not found")
@pytest.mark.asyncio
async def test_get_modified():
    RUN_ID = "61fd573874bc0ce059643515"
    url = f"/datasets/{RUN_ID}/modified"
    response = client.get(url)
    data = response.json()
    assert response.status_code == 200
    assert type(data) is str
    assert datetime.fromisoformat(data) is not None
    settings = get_settings()
    LOCAL_PATH = Path(settings.storage_local_cache_dir) / f"{RUN_ID}.h5"
    assert LOCAL_PATH.exists() is False


@pytest.mark.skipif(os.path.exists(get_settings().storage_gcs_credentials_file) is False,
                    reason="STORAGE_GCS_CREDENTIALS_FILE not found")
@pytest.mark.asyncio
async def test_get_modified_not_found():
    RUN_ID = "1234567"
    url = f"/datasets/{RUN_ID}/modified"
    response = client.get(url)
    assert response.status_code == 404
    assert response.json()['detail'] == "Dataset not found"


@pytest.mark.skipif(os.path.exists(get_settings().storage_gcs_credentials_file) is False,
                    reason="STORAGE_GCS_CREDENTIALS_FILE not found")
@pytest.mark.asyncio
async def test_get_metadata():
    RUN_ID = "61fd573874bc0ce059643515"
    url = f"/datasets/{RUN_ID}/metadata"
    settings = get_settings()
    response = client.get(url)
    data = response.json()
    assert response.status_code == 200
    assert type(data) is dict
    _ = HDF5File.model_validate_json(json_dumps(data))
    hdf5_file = HDF5File.model_validate_json(response.content.decode("utf-8"))
    assert hdf5_file.filename == "reports.h5"
    assert hdf5_file.uri is not None
    assert hdf5_file.id == RUN_ID
    LOCAL_PATH = Path(settings.storage_local_cache_dir) / f"{RUN_ID}.h5"
    assert LOCAL_PATH.exists() is False


@pytest.mark.skipif(os.path.exists(get_settings().storage_gcs_credentials_file) is False,
                    reason="STORAGE_GCS_CREDENTIALS_FILE not found")
@pytest.mark.asyncio
async def test_get_metadata_and_datasets_not_finite():
    RUN_ID = "677ca7063e750b90a425ecde"
    url = f"/datasets/{RUN_ID}/metadata"
    settings = get_settings()
    response = client.get(url)
    data = response.json()
    assert response.status_code == 200
    assert type(data) is dict
    _ = HDF5File.model_validate_json(json_dumps(data))
    hdf5_file = HDF5File.model_validate_json(response.content.decode("utf-8"))
    assert hdf5_file.filename == "reports.h5"
    assert hdf5_file.uri is not None
    assert hdf5_file.id == RUN_ID

    LOCAL_PATH = Path(settings.storage_local_cache_dir) / f"{RUN_ID}.h5"
    assert LOCAL_PATH.exists() is False

    dataset_names = [dataset.name for group in hdf5_file.groups for dataset in group.datasets]
    assert "simulation.sedml/objective" in dataset_names
    assert "simulation.sedml/reaction_fluxes" in dataset_names

    url = f"/datasets/{RUN_ID}/data?dataset_name=simulation.sedml/objective"
    response = client.get(url)
    data = response.json()
    import numpy.typing as npt
    assert response.status_code == 200
    dataset_data = DatasetData.model_validate(data)
    assert dataset_data.shape == [1]
    assert dataset_data.values == ['nan']

    url = f"/datasets/{RUN_ID}/data?dataset_name=simulation.sedml/reaction_fluxes"
    response = client.get(url)
    data = response.json()
    assert response.status_code == 200
    dataset_data = DatasetData.model_validate(data)
    assert dataset_data.shape == [1075]
    assert dataset_data.values == ['nan' for _ in range(1075)]



@pytest.mark.skipif(os.path.exists(get_settings().storage_gcs_credentials_file) is False,
                    reason="STORAGE_GCS_CREDENTIALS_FILE not found")
@pytest.mark.asyncio
async def test_get_metadata_not_found():
    RUN_ID = "1234567"
    url = f"/datasets/{RUN_ID}/metadata"
    response = client.get(url)
    assert response.status_code == 404
    assert response.json()['detail'] == "Dataset not found"
