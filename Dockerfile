FROM node:18-alpine

WORKDIR /app

# copy package.json and install dependencies
COPY frontend/package*.json ./
RUN npm ci --legacy-peer-deps

# copy and build content
COPY frontend .
RUN npm run build

# install serve and serve app
RUN npm install -g serve
EXPOSE 5000
CMD serve -s build
