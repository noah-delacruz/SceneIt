import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    favorites: {
        type: [],
        required: true,
    },
});

export default mongoose.model("User", userSchema);
