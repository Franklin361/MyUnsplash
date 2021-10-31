import Fastify from "fastify";
import dotenv from 'dotenv';
import { dbConnection } from "./src/database/config";
import { imageRoute } from './src/router/image.route';

dotenv.config();


const server = Fastify({
    logger: true
});


server.register(require('fastify-cors'));

imageRoute.forEach( route => server.route(route) );


const start = async () => {
    try {

        await server.listen(process.env.PORT || 5000);

    } catch (error) {
        server.log.error(error)
        process.exit(1)
    }
};

dbConnection();
start();