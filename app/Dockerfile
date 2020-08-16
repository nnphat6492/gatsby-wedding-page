FROM node:12.18.3

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

COPY package*.json ./

COPY yarn*.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "develop"]
