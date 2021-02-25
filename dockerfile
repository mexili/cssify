FROM node:14.15.4
# docker hub and look 14.15

# ls -> app


RUN mkdir -p /app/backend

WORKDIR /app/backend

COPY backend/* /app/backend/

# /app/backend

RUN npm install

COPY . .

USER node

EXPOSE 3000

CMD ["npm","start"]
