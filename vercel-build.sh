#!/bin/bash
echo "Building for Vercel deployment..."

# Instalar dependencias
npm install

# Verificar estructura de proyecto
echo "Project structure check..."
if [ ! -f "./bin/www" ]; then
    echo "Creating www executable..."
    mkdir -p ./bin
    echo '#!/usr/bin/env node' > ./bin/www
    echo 'var app = require("../app");' >> ./bin/www
    echo 'var debug = require("debug")("personal:server");' >> ./bin/www
    echo 'var http = require("http");' >> ./bin/www
    echo 'var port = normalizePort(process.env.PORT || "3000");' >> ./bin/www
    echo 'app.set("port", port);' >> ./bin/www
    echo 'var server = http.createServer(app);' >> ./bin/www
    echo 'server.listen(port);' >> ./bin/www
    echo 'server.on("error", onError);' >> ./bin/www
    echo 'server.on("listening", onListening);' >> ./bin/www
    echo 'function normalizePort(val) { var port = parseInt(val, 10); if (isNaN(port)) { return val; } if (port >= 0) { return port; } return false; }' >> ./bin/www
    echo 'function onError(error) { if (error.syscall !== "listen") { throw error; } var bind = typeof port === "string" ? "Pipe " + port : "Port " + port; switch (error.code) { case "EACCES": console.error(bind + " requires elevated privileges"); process.exit(1); break; case "EADDRINUSE": console.error(bind + " is already in use"); process.exit(1); break; default: throw error; } }' >> ./bin/www
    echo 'function onListening() { var addr = server.address(); var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port; debug("Listening on " + bind); }' >> ./bin/www
    chmod +x ./bin/www
fi

echo "Build completed successfully!"