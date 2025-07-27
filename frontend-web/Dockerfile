FROM node:24.4.1

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npx ng config -g cli.analytics false

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start"]