FROM node:14

# docker hub and look 14.15

# ls -> app


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
