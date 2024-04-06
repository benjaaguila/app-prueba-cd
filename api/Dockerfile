# Usa la imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo en /app
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./
COPY yarn.lock ./

# Instala las dependencias de la aplicación
RUN yarn install --production

# Copia todo el código de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["node", "index.js"]
