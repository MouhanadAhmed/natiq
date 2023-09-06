# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /natiq/

# Copy the app package and package-lock.json file
COPY package.json /natiq/

# Copy local directories to the current local directory of our docker image (/app)
COPY src/ /natiq/src
COPY public/ /natiq/public

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install 

# Start the app using serve command
CMD ["npm", "start"]

# # syntax=docker/dockerfile:1.4

# # Create image based on the official Node image from dockerhub
# FROM node:lts-buster AS development

# # Create app directory
# WORKDIR /natiq/src/app

# # Copy dependency definitions
# COPY package.json /natiq/src/app
# COPY package-lock.json /natiq/src/app

# # Install dependecies
# #RUN npm set progress=false \
# #    && npm config set depth 0 \
# #    && npm i install
# RUN npm ci

# # Get all the code needed to run the app
# COPY . /natiq/src/app

# # Expose the port the app runs in
# EXPOSE 3000

# # Serve the app
# CMD ["npm", "start"]

# FROM development as dev-envs
# RUN <<EOF
# apt-get update
# apt-get install -y --no-install-recommends git
# EOF

# RUN <<EOF
# # useradd -s /bin/bash -m vscode
# groupadd docker
# usermod -aG docker vscode
# EOF
# # install Docker tools (cli, buildx, compose)
# COPY --from=gloursdocker/docker / /
# CMD [ "npm", "start" ]