FROM node:14
RUN mkdir -p /usr/primes_server
WORKDIR /usr/primes_server
COPY package.json .
COPY package-lock.json ./
RUN npm install --silent
COPY . .


CMD [ "npm", "start" ]