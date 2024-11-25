# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.192.0/containers/javascript-node/.devcontainer/base.Dockerfile

ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN export DEBIAN_FRONTEND=noninteractive \
     && apt-get update \
     && apt-get -y install --no-install-recommends \
     python3 \
     make \
     g++ \
     libcairo2-dev \
     libpango1.0-dev \
     libjpeg-dev \
     libgif-dev \
     librsvg2-dev \
     && su node -c "git config --global pull.rebase true" \
     && su node -c "npm install -g @nrwl/cli commitizen"
# && apt-get clean \
# && rm -rf /var/lib/apt/lists/*

# ENTRYPOINT ["npx", "nx", "run", "platform:serve", "--host", "0.0.0.0", "--port", "4200"]