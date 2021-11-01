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
exports.imageRoute = void 0;
const ImageSchema_1 = __importDefault(require("../models/ImageSchema"));
exports.imageRoute = [
    {
        url: '/api/images',
        method: 'GET',
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            const images = yield ImageSchema_1.default.find({});
            reply.send(images);
        })
    },
    {
        url: '/api/images/:word',
        method: 'GET',
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            const results = yield ImageSchema_1.default.find({});
            const { word } = request.params;
            const images = results.filter(img => img.label.includes(word));
            reply.send(images);
        })
    },
    {
        url: '/api/image',
        method: 'POST',
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            const image = request.body;
            const newImage = new ImageSchema_1.default(image);
            const saveImage = yield newImage.save();
            reply.code(201).send(saveImage);
        })
    },
    {
        url: '/api/image/:id',
        method: 'DELETE',
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = request.params;
            yield ImageSchema_1.default.findByIdAndDelete(id);
            reply.code(204).send();
        })
    }
];
//# sourceMappingURL=image.route.js.map