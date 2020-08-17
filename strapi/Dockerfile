FROM node:12.18.3

WORKDIR /usr/src/app

COPY package.json .

RUN yarn global add strapi

RUN yarn install

COPY . .

CMD ["strapi", "develop"]
