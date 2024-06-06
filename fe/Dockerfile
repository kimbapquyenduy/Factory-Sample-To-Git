FROM node:20-alpine
RUN apk add -U tzdata
ENV TZ Asia/Ho_Chi_Minh
WORKDIR /usr/src/app
COPY . ./
RUN yarn install
RUN yarn cache clean
RUN yarn build
ENV NODE_ENV=production
EXPOSE 3000
CMD ["yarn", "start"]