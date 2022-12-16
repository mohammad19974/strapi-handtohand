FROM node:12-alpine

ENV PORT 1337
ENV HOST 0.0.0.0
ENV NODE_ENV production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install -timeout=600000


# Bundle app source
COPY . /usr/src/app

RUN npm build
EXPOSE 1337

CMD [ "npm", "start" ]