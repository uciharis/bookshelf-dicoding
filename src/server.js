// contains codes to make, config and run server http with Hapi
const Hapi = require('@hapi/hapi');
const routes = require('./route');

const init = async()=> {
    const server = Hapi.server({

        port: 9000,
        host: 'localhost',
    });

    server.route(routes);
    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();