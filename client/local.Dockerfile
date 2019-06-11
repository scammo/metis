FROM node:11.15.0
WORKDIR /app
COPY package*.json ./
RUN npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && npm config set "//npm.fontawesome.com/:_authToken" D96E26C0-D385-477F-A918-5ACD66AE1214
RUN apt-get update && apt-get install -y --no-install-recommends \
        libgconf2-4 \
        libnss3-dev \
        libgtk-3-0 \
        libxtst6 \
        libxss1 \
        libasound2
RUN npm ci
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]
