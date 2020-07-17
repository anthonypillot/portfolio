# Reference: https://cli.vuejs.org/guide/deployment.html#docker-nginx
FROM node:latest as build-stage

WORKDIR /app

COPY package*.json ./

# Install dependencies using "npm ci" (ref: https://docs.npmjs.com/cli/ci.html)
RUN npm ci

COPY ./ .

# Build bundle application (located in /dist directory)
RUN npm run build

FROM nginx as production-stage

RUN mkdir /app

# Copy bundle application in NGINX image
COPY --from=build-stage /app/dist /app

# Copy NGINX config file in image
COPY nginx.conf /etc/nginx/nginx.conf
