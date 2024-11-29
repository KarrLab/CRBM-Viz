#############
### base ###
#############
FROM mcr.microsoft.com/vscode/devcontainers/python:3.10-bullseye

# [Choice] Node.js version: none, lts/*, 16, 14, 12, 10
ARG NODE_VERSION="18"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# Poetry
ARG POETRY_VERSION="3"
RUN if [ "${POETRY_VERSION}" != "none" ]; then su vscode -c "umask 0002 && pip3 install poetry==${POETRY_VERSION}"; fi

# Nox
ARG NOX_VERSION="none"
RUN if [ "${NOX_VERSION}" != "none" ]; then su vscode -c "umask 0002 && pip3 install nox-poetry nox==${NOX_VERSION}"; fi

WORKDIR /app

###################################
# update apt package database
RUN apt-get update -y

# install poetry
ENV PATH="/opt/poetry/bin:$PATH"
ENV POETRY_HOME=/opt/poetry
RUN curl -sSL https://install.python-poetry.org | python3 - \
    && poetry config virtualenvs.create true \
    && poetry config cache-dir "/poetry/.cache" --local \
    && chmod 755 poetry.toml

# Copy over dependency list
COPY . .

RUN chmod 755 poetry.toml \
    && poetry env use 3.10 \
    && poetry install --no-cache

#
## set up matplotlib font manager
RUN poetry run python -c "import matplotlib.font_manager"

## install assimulo because pipenv fails to install it
#ARG ASSIMULO_VERSION=3.2.9
#RUN pip install git+https://github.com/modelon-community/Assimulo.git@Assimulo-${ASSIMULO_VERSION}

RUN poetry run python -m compileall /app/combine_api/ \
    && PY_EXEC_PATH=$(which python) \
    && PY_PREFIX=$(echo ${PY_EXEC_PATH} | rev | cut -d "/" -f 3- | rev) \
    && PYTHON_MAJOR_MINOR_VERSION=$(echo $PYTHON_VERSION | cut -d . -f 1-2) \
    && poetry run python -m compileall ${PY_PREFIX}/lib/python${PYTHON_MAJOR_MINOR_VERSION}/site-packages \
#    && PYTHONPATH=/app python -c "from combine_api.handlers.run.utils import write_simulator_specs_cache; write_simulator_specs_cache();" \
    || exit 0

# in place testing - must provide env vars for S3 testing
# RUN poetry run python3 -m pytest -v tests

EXPOSE 3333
CMD /bin/bash /xvfb-startup.sh \
    poetry run gunicorn \
        --bind 0.0.0.0:3333 combine_api.app:app \
        --workers 2 \
        --threads 4 \
        --worker-class gthread \
        --max-requests 1000 \
        --timeout 30 \
        --keep-alive 5 \
        --worker-tmp-dir /dev/shm \
        --log-level debug \
        --log-file=-

