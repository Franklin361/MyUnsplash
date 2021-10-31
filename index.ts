import Fastify from "fastify";
import dotenv from 'dotenv';
import { dbConnection } from "./src/database/config";
import { imageRoute } from './src/router/image.route';

const server = Fastify({
    logger: true
});

dotenv.config();


imageRoute.forEach( route => server.route(route) );


const start = async () => {
    try {

        await server.listen(process.env.PORT || 3000);

    } catch (error) {
        server.log.error(error)
        process.exit(1)
    }
};

dbConnection();
start();