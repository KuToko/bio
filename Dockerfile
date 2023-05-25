FROM node:18.3.0-alpine3.14


# Create app directory
WORKDIR  /app

COPY package*.json ./

RUN npm ci --production

COPY . .

RUN npm install


CMD ["node", "ace", "serve", "--watch"]
