FROM node:20-alpine
WORKDIR /app
COPY src/ ./src
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY tsconfig.app.json ./
COPY vite.config.ts ./
COPY index.html ./
COPY .env ./
RUN npm install
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
