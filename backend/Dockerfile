FROM node:16-alpine
WORKDIR /api
COPY package.json yarn.lock ./
COPY prisma ./prisma/
RUN yarn

COPY . .
RUN yarn prisma generate
RUN yarn prisma migrate
RUN yarn prisma db seed

EXPOSE 4000
CMD yarn start