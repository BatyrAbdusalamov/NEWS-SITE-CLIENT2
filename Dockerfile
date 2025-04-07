FROM node:20-alpine as dev
WORKDIR /app
COPY / ./
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "preview"]
