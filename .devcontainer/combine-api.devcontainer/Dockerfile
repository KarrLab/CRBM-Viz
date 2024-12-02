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

WORKDIR /workspace

###################################
# update apt package database
RUN apt-get update -y

# install poetry
ENV PATH="/opt/poetry/bin:$PATH"
ENV POETRY_HOME=/opt/poetry
RUN curl -sSL https://install.python-poetry.org | python3 - \
    && poetry config virtualenvs.create true \
    && poetry config cache-dir "/poetry/.cache" --local

# RUN poetry env use 3.10 \
#     && poetry install --no-cache

# #
# ## set up matplotlib font manager
# RUN poetry run python -c "import matplotlib.font_manager"

# EXPOSE 3333
