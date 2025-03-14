import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        const connect = await mongoose.connect(
            process.env.MONGODB_CONNECTION_STRING
        );
    } catch (error) {
        throw error;
    }
};
