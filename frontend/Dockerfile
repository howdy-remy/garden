FROM node:16-alpine
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN yarn 
RUN yarn build
EXPOSE 3000
CMD yarn start