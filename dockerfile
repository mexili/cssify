FROM node:13
// Node version should be lessar than 14.15.x .
RUN mkdir -p /app/backend

WORKDIR /usr/app/backend

COPY package*.json ./ 

#backend/* . /

# 

RUN npm install

COPY . .

USER node

EXPOSE 3000

CMD ["npm","start"]
