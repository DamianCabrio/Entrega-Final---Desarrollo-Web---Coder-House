# Dividir en capas nuestro proyecto

## DAMIÁN CABRIO

## Correr el proyecto localmente

Primero se debe instalar los paquetes desde npm con `npm i`
Para correr el proyecto localmente se debe correr el siguiente comando `npm run dev`. Si se quiere correr el proyecto con un puerto en particular se debe agregar a este comando el parámetro `-p puerto`. Por ejemplo `npm run dev -- -p 2000`.

También se debe generar y popular un archivo .env, basándose en el archivo .env.example.
Las variables que se deben agregar al archivo .env son: `URL_BASE`, `JWT_SECRET`, `MONGODB_URL` y `PORT`.

La autentificación de usuarios se realiza con la biblioteca passport y JWT. En conjunto permiten guardar la sesión del usuario e identificarlo. Un usuario puede tener 2 roles: 'admin' y 'user'.