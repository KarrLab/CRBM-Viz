#############
### base ###
#############
FROM node:15-alpine as base

#The name of the app to build
ARG app
ENV APP=$app 
RUN echo building ${APP}

# Copy over dependency list
COPY biosimulations/tsconfig.base.json /app/tsconfig.base.json
COPY biosimulations/package.json /app/package.json
COPY biosimulations/package-lock.json /app/package-lock.json
#############
### build ###
#############
FROM base as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install nrwl cli 
RUN npm install -g @nrwl/cli

# copy dependencies
COPY biosimulations/nx.json  /app/nx.json
COPY biosimulations/angular.json /app/angular.json


# install the app, including the dev dependencies
RUN npm ci --silent

#copy source
COPY biosimulations/libs /app/libs
COPY biosimulations/apps /app/apps

# generate build
# Redifining the env *might* correct cache invalidtion issue
ENV APP=${APP}
RUN nx build ${APP} --prod

############
### prod ###
############

LABEL org.opencontainers.image.source https://github.com/biosimulations/biosimulations

# base image
FROM base as prod
WORKDIR /app
# install the app and include only dependencies needed to run
RUN npm ci --only=production --silent

# copy artifact build from the 'build environment'
RUN echo app is ${APP}
COPY --from=build /app/dist/apps/${APP}/ .
EXPOSE 3333
CMD node main.js