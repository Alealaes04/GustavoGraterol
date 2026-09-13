# Configuración para Vercel - SIMPLE

## Archivos necesarios:

### 1. `vercel.json` ✅
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

### 2. `index.js` ✅
```javascript
const app = require('./app');
module.exports = app;
```

### 3. `package.json` ✅
- `"main": "index.js"`
- `"scripts": { "start": "node ./bin/www" }`

## Pasos para desplegar:

1. **Subir a GitHub:**
```bash
git add .
git commit -m "Portafolio actualizado con tema profesional + config Vercel"
git push origin main
```

2. **En Vercel.com:**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio
   - Vercel detectará automáticamente la configuración
   - Haz clic en "Deploy"

3. **URL generada:**
   `https://gustavo-graterol.vercel.app`

## Verificación:

✅ **Archivos correctos:**
- `vercel.json` - Configuración minimalista
- `index.js` - Punto de entrada simple
- `app.js` - Aplicación Express funcional
- `package.json` - Configurado correctamente

✅ **Funcionalidad:**
- Servidor Express funcionando
- Archivos estáticos servidos
- Rutas configuradas
- Motor de vistas EJS activo

## Solución a warnings:
Los warnings de `npm fund` y `allow-scripts` son **normales** y **no afectan el despliegue**. Vercel los ignora automáticamente.

## Testing local:
```bash
# Probar que funciona
npm start
# O
node ./bin/www
```

El puerto 3000 funcionará localmente. En Vercel usará `process.env.PORT` automáticamente.

---

**¡LISTO PARA DEPLOY!** 🚀

Con esta configuración minimalista, Vercel desplegará tu portafolio sin problemas.