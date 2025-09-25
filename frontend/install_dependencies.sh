#!/bin/bash
echo "Instalando todas as dependências do projeto Feira de Profissões..."

# Dependências principais
npm install bcryptjs@^3.0.2 cors@^2.8.5 dotenv@^17.2.1 express@^5.1.0 jsonwebtoken@^9.0.2 mysql2@^3.14.3 react@^19.1.1 react-dom@^19.1.1 react-router@^7.8.1 react-router-dom@^7.8.1 swiper@^11.2.10

# Dependências de desenvolvimento
npm install -D @eslint/js@^9.33.0 @types/react@^19.1.11 @types/react-dom@^19.1.7 @vitejs/plugin-react@^4.7.0 eslint@^9.33.0 eslint-plugin-react-hooks@^5.2.0 eslint-plugin-react-refresh@^0.4.20 globals@^16.3.0 nodemon@^3.1.10 vite@^7.1.3

echo "Todas as dependências foram instaladas com sucesso!"
echo "Para rodar o projeto:"
echo "1. Backend: node src/backend/server.js"
echo "2. Frontend: npm run dev"
