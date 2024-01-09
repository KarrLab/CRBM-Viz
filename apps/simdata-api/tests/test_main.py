import os
from pathlib import Path
from urllib.parse import quote

import pytest
from fastapi.testclient import TestClient

from simdata_api.main import app

client = TestClient(app)

# def get_settings_override():
#     return Settings(storate_access_key_id="test",
#                     storage_access_key="test",
#                     storage_endpoint_url="test",
#                     storage_bucket="test")
#
# app.dependency_overrides[get_settings] = get_settings_override


@pytest.mark.asyncio
async def test_root():
    response = client.get("/")
    data = response.json()
    assert data == {"message": "Hello from simdata-api"}


@pytest.mark.asyncio
async def test_health():
    response = client.get("/health")
    data = response.json()
    assert data == {'status': 'ok'}


@pytest.mark.asyncio
async def test_read_dataset():
    RUN_ID = "61fd573874bc0ce059643515"
    DATASET_NAME = quote("/simulation_1.sedml/report", safe="")
    url = f"/datasets/{RUN_ID}?dataset_name={DATASET_NAME}"
    response = client.get(url)
    data = response.json()
    assert response.status_code == 200
    assert data['shape'] == [21, 201]

    LOCAL_STORAGE_PATH = "../local_data"
    LOCAL_PATH = Path(f"{LOCAL_STORAGE_PATH}/{RUN_ID}.h5")
    if LOCAL_PATH.exists():
        os.remove(LOCAL_PATH)