# syntax=docker/dockerfile:1

# This Dockerfile builds the backend API

ARG NODE_VERSION=21.7.1

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD npm run start
