// Script de verificación para Vercel
console.log("=== Verificación de configuración Vercel ===\n");

const fs = require('fs');
const path = require('path');

// Verificar archivos necesarios
const requiredFiles = [
  'vercel.json',
  'package.json',
  'app.js',
  'bin/www',
  'package-lock.json'
];

console.log("✅ Archivos requeridos:");
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`${exists ? '✓' : '✗'} ${file}`);
});

// Verificar package.json
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log("\n✅ package.json:");
  console.log(`✓ Nombre: ${packageJson.name}`);
  console.log(`✓ Script start: ${packageJson.scripts?.start || 'NO ENCONTRADO'}`);
  
  if (packageJson.scripts?.start !== 'node ./bin/www') {
    console.log('⚠️  Advertencia: El script start debería ser "node ./bin/www"');
  }
} catch (err) {
  console.log('✗ Error leyendo package.json:', err.message);
}

// Verificar vercel.json
try {
  const vercelJson = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  console.log("\n✅ vercel.json:");
  console.log(`✓ Versión: ${vercelJson.version}`);
  console.log(`✓ Builds configurados: ${vercelJson.builds?.length || 0}`);
  console.log(`✓ Rutas configuradas: ${vercelJson.routes?.length || 0}`);
} catch (err) {
  console.log('✗ Error leyendo vercel.json:', err.message);
}

// Verificar bin/www
try {
  const wwwContent = fs.readFileSync('bin/www', 'utf8');
  const hasPort = wwwContent.includes('process.env.PORT');
  console.log("\n✅ bin/www:");
  console.log(`✓ Usa process.env.PORT: ${hasPort ? '✓' : '✗'}`);
} catch (err) {
  console.log('✗ Error leyendo bin/www:', err.message);
}

// Verificar estructura de carpetas
console.log("\n✅ Estructura de carpetas:");
const requiredDirs = [
  'views',
  'views/partials',
  'public',
  'public/stylesheets',
  'public/images',
  'routes'
];

requiredDirs.forEach(dir => {
  const exists = fs.existsSync(path.join(__dirname, dir));
  console.log(`${exists ? '✓' : '✗'} ${dir}/`);
});

console.log("\n=== Verificación completada ===");
console.log("\nInstrucciones para Vercel:");
console.log("1. Sube el código a GitHub");
console.log("2. Conecta el repositorio en vercel.com");
console.log("3. Vercel detectará automáticamente la configuración");
console.log("4. El sitio se desplegará en: https://[nombre-proyecto].vercel.app");