'use strict'

const Hapi = require('hapi');
const Routes = require('./routes/route');
const Inert = require('inert'); //Sirve para manejar todo lo relacionado a archivos estaticos y directorios
const Path = require('path');

const server = new Hapi.Server({
    port: process.env.PORT || 8080,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, '/') //Path para buscar todo lo relacionado a html
        }
    }
});

// Empieza el server
async function start() {

    await server.register(Inert);//Primero se tiene que registrar

    server.route(Routes); //Despues se le pasan las rutas

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();