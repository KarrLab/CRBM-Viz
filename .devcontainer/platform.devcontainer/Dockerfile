# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.192.0/containers/javascript-node/.devcontainer/base.Dockerfile

ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
     python3 \
     git \
     make \
     g++ \
     libcairo2-dev \
     libpango1.0-dev \
     libjpeg-dev \
     libgif-dev \
     librsvg2-dev \
     && npm install -g @nrwl/cli commitizen \
     && chown -R node:node /workspace

USER node

RUN git config --global pull.rebase true

WORKDIR /workspace
# && su node -c "git config --global pull.rebase true" \
# && su node -c "npm install -g @nrwl/cli commitizen"
# ENTRYPOINT ["npx", "nx", "run", "platform:serve", "--host", "0.0.0.0", "--port", "4200"]