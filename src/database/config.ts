import { connect, ConnectOptions } from 'mongoose';

export const dbConnection = async () => {
    
    const uri = process.env.MONGO_CONECCTION || 'mongodb://localhost:27017/api';
    
    try {
        
        await connect(uri);

        console.log('Database Online:)')

    } catch (error) {
        
        console.log(error);
        throw new Error('There was an error in the database connection :c');
    }
};