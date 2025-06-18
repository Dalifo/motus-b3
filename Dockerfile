FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --loglevel warn

COPY . .

ENV NODE_ENV=production
RUN npm run build

FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html

# Supprime la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copie notre config personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
