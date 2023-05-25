FROM node:18.3.0-alpine3.14


# Create app directory
WORKDIR  /app
ENV PORT=8080
ENV HOST=0.0.0.0
ENV NODE_ENV=production
ENV APP_KEY=X5MztHmlu9tmTAfAcC7f_39zOO8nnmFt
ENV DRIVE_DISK=local
ENV SESSION_DRIVER=cookie
ENV CACHE_VIEWS=false
ENV DB_CONNECTION=pg
ENV PG_HOST=localhost
ENV PG_PORT=5432
ENV PG_USER=postgres
ENV PG_PASSWORD=qwerty
ENV PG_DB_NAME=kutoko
COPY . .
EXPOSE 8080
RUN npm install


CMD ["node", "ace", "serve", "--watch"]
