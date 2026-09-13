# Despliegue en Vercel

Este portafolio está configurado para ser desplegado en Vercel.

## Configuración para Vercel

### Pasos para el despliegue:

1. **Conectar tu repositorio GitHub en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Importa este repositorio desde GitHub
   - Vercel detectará automáticamente la configuración de Node.js

2. **Variables de entorno (opcional)**
   - Si tienes variables de entorno, configúralas en el panel de Vercel
   - El archivo `.env` local no se sube a producción

3. **Configuración automática**
   - Vercel usa automáticamente `process.env.PORT` en lugar del puerto 3000
   - El archivo `vercel.json` configura el routing correctamente
   - El build se ejecuta automáticamente con `npm install`

### Características técnicas:
- **Framework**: Express.js con Node.js
- **Motor de vistas**: EJS
- **Estilos**: CSS personalizado
- **Base de datos**: No se requiere configuración adicional
- **Puerto**: Configurado automáticamente por Vercel (`process.env.PORT`)

### Comandos de build:
- `npm install` - Instala dependencias
- `npm start` - Inicia la aplicación (usado por Vercel en producción)

### Archivos de configuración:
- `vercel.json` - Configuración específica para Vercel
- `package.json` - Scripts y dependencias
- `vercel-build.sh` - Script de build adicional (opcional)

### Verificación previa al despliegue:
1. Asegúrate de que todas las dependencias están en `package.json`
2. Verifica que no haya errores con `npm install` localmente
3. Prueba la aplicación localmente con `npm start`
4. El puerto debe ser dinámico (usa `process.env.PORT || 3000`)

## Enlaces útiles:
- [Documentación de Vercel para Node.js](https://vercel.com/docs/concepts/functions/serverless-functions)
- [Soporte de Express en Vercel](https://vercel.com/guides/using-express-with-vercel)
- [Variables de entorno en Vercel](https://vercel.com/docs/concepts/projects/environment-variables)