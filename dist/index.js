"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./src/database/config");
const image_route_1 = require("./src/router/image.route");
const server = (0, fastify_1.default)({
    logger: true
});
dotenv_1.default.config();
image_route_1.imageRoute.forEach(route => server.route(route));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server.listen(process.env.PORT || 3000);
    }
    catch (error) {
        server.log.error(error);
        process.exit(1);
    }
});
(0, config_1.dbConnection)();
start();
//# sourceMappingURL=index.js.map