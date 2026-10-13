# Etapa 1: Preparar e Compilar o site com Node.js
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
# O --legacy-peer-deps evita aquele erro do Tailwind
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Etapa 2: Servir os arquivos estáticos com Nginx (Leve e Rápido)
FROM nginx:alpine
# Copia a pasta 'dist' gerada na Etapa 1 para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]