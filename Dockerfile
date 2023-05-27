FROM node:18.3.0-alpine3.14


# Create app directory
WORKDIR  /app
ENV PORT=8080
ENV HOST=0.0.0.0
ENV NODE_ENV=production

COPY . .
EXPOSE 8080
RUN npm install


CMD ["node", "ace", "serve", "--watch"]
