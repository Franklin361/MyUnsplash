"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./src/database/config");
const image_route_1 = require("./src/router/image.route");
dotenv_1.default.config();
const server = (0, fastify_1.default)({
    logger: true
});
server.register(require('fastify-cors'));
image_route_1.imageRoute.forEach(route => server.route(route));
server.listen(process.env.PORT || 8000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
(0, config_1.dbConnection)();
//# sourceMappingURL=index.js.map