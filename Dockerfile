# Common build stage
FROM node:14.14.0-alpine3.12 as common-build-stage

RUN npm install

EXPOSE 3000

ENV NODE_ENV development
CMD ["npm", "run", "dev"]
