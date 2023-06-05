FROM node:18-slim
# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install curl gnupg -y \
    && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install google-chrome-stable -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*
# Crear el directorio de trabajo
WORKDIR /app
# Copiar el código de la aplicación
COPY . .
# Instalar dependencias
RUN npm install --production
# Exponer el puerto 3030
EXPOSE 3030
# Configurar las variables de entorno
ENV NODE_ENV production
ENV POSTGRES_DB_USER postgres
ENV POSTGRES_DB_HOST postgres_db
ENV POSTGRES_DB_PASSWORD postgres
ENV POSTGRES_DB_DATABASE balance-mentors
# Crear un usuario no root para ejecutar la aplicación
# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nodejs -u 1001
# Ejecutar la aplicación con Puppeteer
# RUN npm run tsc
CMD ["npm", "start"]