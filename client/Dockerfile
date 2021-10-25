FROM node:14
RUN mkdir -p /usr/primes_client
WORKDIR /usr/primes_client
COPY package.json .
COPY package-lock.json ./
RUN npm install --silent
COPY . .


CMD [ "npm", "start" ]