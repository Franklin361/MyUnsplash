import { RouteOptions } from "fastify";
import ImageSchema from "../models/ImageSchema";
import { IImage } from '../models/ImageSchema';

export const imageRoute:RouteOptions[] = [
    {
        url:'/api/images',
        method:'GET',
        handler: async(request, reply)=>{ 
            const images = await ImageSchema.find({});
            reply.send(images);
        }
    },
    {
        url:'/api/image',
        method:'POST',
        handler: async(request, reply) => {

            const image = request.body as IImage;
            const newImage = new ImageSchema(image);
            const saveImage = await newImage.save();

            reply.code(201).send(saveImage);
        }
    },
    {
        url:'/api/image/:id',
        method:'DELETE',
        handler: async(request, reply)=>{
            
            const {id} = request.params as any;
            await ImageSchema.findByIdAndDelete(id);

            reply.code(204).send(); 
        }
    }    
]

