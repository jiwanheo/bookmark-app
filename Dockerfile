# syntax=docker/dockerfile:1

# This Dockerfile builds the backend API

ARG NODE_VERSION=21.7.1

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/app

# Copying this separately, because if no change in package json, 
# npm install will be skipped, therefore saving build time
COPY package.json package-lock.json ./

# Build static file for nginx to serve
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

RUN npm run build

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD npm run start
