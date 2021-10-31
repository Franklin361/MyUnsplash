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


server.listen(process.env.PORT||8000, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

dbConnection();
