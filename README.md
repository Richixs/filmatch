# Filmatch

Filmatch es una plataforma centralizada para la compra de entradas de cine, disponible como aplicación web y móvil. Permite a los usuarios buscar funciones, comparar cines y adquirir boletos de manera sencilla y rápida.

## Características principales
- Consulta de cartelera y horarios en múltiples cines.
- Compra de entradas desde la web o la app móvil.
- Comparación de precios y ubicaciones.
- Gestión de reservas y notificaciones.

## Estructura del proyecto
- **backend/**: API REST construida con Django y PostgreSQL.
- **frontend-web/**: Aplicación web desarrollada con Angular.
- **mobile/**: Aplicación móvil (estructura para Android).

## Requisitos
- Docker y Docker Compose
- Node.js (para desarrollo frontend)
- Python 3.13+ (para desarrollo backend)

## Instalación rápida con Docker
1. Copia el archivo `.env.example` a `.env` y completa las variables necesarias.
2. Ejecuta:
   ```sh
   docker-compose up --build
   ```
3. Accede a la web en [http://localhost:4200](http://localhost:4200) y al backend en [http://localhost:8000](http://localhost:8000).

## Desarrollo local
- **Backend:**
  ```sh
  cd backend
  pip install -r requirements.txt
  python manage.py runserver
  ```
- **Frontend web:**
  ```sh
  cd frontend-web
  npm install
  npm start
  ```

## Licencia
MIT
