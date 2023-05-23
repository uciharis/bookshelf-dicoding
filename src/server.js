// contains codes to make, config and run server http with Hapi
const Hapi = require('@hapi/hapi');

const init = async()=> {
    const server = Hapi.server({

        port: 9000,
        host: 'localhost',
    });

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();