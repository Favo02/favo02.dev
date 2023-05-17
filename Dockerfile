FROM node:18-alpine

WORKDIR /app

# copy package.json and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# copy and build content
COPY . .
RUN npm run build

# install serve and serve app
RUN npm install -g serve
EXPOSE 5000
CMD serve -s build
