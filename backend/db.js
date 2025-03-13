import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        const connect = await mongoose.connect(
            process.env.MONGODB_CONNECTION_STRING
        );
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};
