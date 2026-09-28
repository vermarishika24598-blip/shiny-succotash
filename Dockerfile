FROM node:20 AS Builder
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install
COPY . .
RUN npx parcel build index.html

FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
