FROM node:9 as builder
RUN mkdir /reactdev
WORKDIR /reactdev
COPY . .

RUN npm install --quiet
RUN npm run build

FROM nginx:1.13.5
COPY --from=builder /reactdev/build /usr/share/nginx/html

EXPOSE 80