FROM node:lts-alpine as builder


WORKDIR /app


COPY package.json .

RUN npm install

COPY . .

RUN npm run  build

# Expose port 3000 for accessing  the app
EXPOSE 3000

# This allows Heroku bind its PORT the Apps port 
# since Heroku needs to use its own PORT before the App can be made accessible to the World
EXPOSE $PORT


FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
