# Guía de Despliegue en Vercel

## Pasos para desplegar tu portafolio:

### 1. Preparación del repositorio
- Asegúrate de que todos los cambios están en GitHub
- Verifica que el archivo `vercel.json` está incluido
- Confirma que `package.json` tiene el script `"start": "node ./bin/www"`

### 2. Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "New Project"
4. Importa tu repositorio `GustavoGraterol`
5. Vercel detectará automáticamente la configuración de Node.js

### 3. Configuración del proyecto
- **Framework Preset**: Node.js
- **Build Command**: `npm install` (automático)
- **Output Directory**: `.` (raíz del proyecto)
- **Install Command**: `npm install`

### 4. Variables de entorno (opcional)
Si usas variables en `.env`, configúralas en Vercel:
- Ve a Project Settings > Environment Variables
- Agrega cada variable como `NOMBRE=valor`

### 5. Despliegue
1. Haz clic en "Deploy"
2. Vercel construirá y desplegará automáticamente
3. Se generará una URL como `https://gustavo-graterol.vercel.app`

### 6. Configuración de dominio personalizado (opcional)
1. Ve a Project Settings > Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones de Vercel

## Verificación de despliegue exitoso:

✅ **Checks previos:**
- [ ] `npm install` funciona sin errores
- [ ] `npm start` inicia el servidor localmente
- [ ] Puerto dinámico configurado (`process.env.PORT || 3000`)
- [ ] Todas las rutas funcionan correctamente

✅ **Después del despliegue:**
- [ ] Visita tu URL de Vercel
- [ ] Verifica que todas las secciones cargan
- [ ] Prueba el formulario de contacto
- [ ] Verifica en dispositivos móviles (responsive)

## Solución de problemas comunes:

### ❌ Error: "Module not found"
- Verifica que todas las dependencias están en `package.json`
- Ejecuta `npm install` localmente para confirmar

### ❌ Error: "Port already in use"
- Vercel maneja el puerto automáticamente
- Asegúrate de usar `process.env.PORT` en tu código

### ❌ Error: "Cannot GET /"
- Verifica que `vercel.json` está configurado correctamente
- Confirma que `app.js` tiene las rutas configuradas

### ❌ Estilos no cargan
- Verifica que las rutas de CSS están correctas
- Confirma que `express.static()` apunta a `/public`

## Recursos adicionales:
- [Documentación oficial de Vercel](https://vercel.com/docs)
- [Guía de Express en Vercel](https://vercel.com/guides/using-express-with-vercel)
- [Soporte de Vercel](https://vercel.com/help)

---

**¡Tu portafolio profesional está listo para desplegar!** 🚀

Con el tema negro/gris profesional y contenido actualizado para reclutadores, tu sitio presentará una imagen moderna y empresarial que resalta tus habilidades como Ingeniero en Informática.