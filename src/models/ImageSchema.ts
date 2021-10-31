import { Schema, model } from 'mongoose'

export interface IImage {
    url:string;
    label:string;
}

const imageSchema = new Schema<IImage>({
    url:{
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    }
},
{
    // timestamps:true,
    versionKey:false
}
);


imageSchema.method("toJSON", function () {

    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
});



export default model<IImage>('images', imageSchema);