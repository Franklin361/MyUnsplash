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
        const ADDRESS = process.env.ADDRESS || process.env.HOST || process.env.HOSTNAME || "0.0.0.0";
        const PORT = process.env.PORT || 5000;
        
        await server.listen(PORT,ADDRESS);

    } catch (error) {
        server.log.error(error)
        process.exit(1)
    }
};

dbConnection();
start();