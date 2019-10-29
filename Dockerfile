#############
### build ###
#############

# base image
FROM node:12-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY CRBM-Viz/package.json /app/package.json
COPY CRBM-Viz/package-lock.json /app/package-lock.json

RUN npm install
RUN npm install -g @angular/cli

# add app
COPY ./CRBM-Viz /app

# generate build
RUN ng build --output-path=dist --prod --build-optimizer

############
### prod ###
############

# base image
FROM nginx:alpine
ARG port=80
#ENV PORT=80
ENV PORT=$port

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/
#Set port for Heroku and run nginx
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'