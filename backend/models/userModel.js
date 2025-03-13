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
        required: [true, "Password must be of length 8 or greater"],
        minlength: 8,
    },
    favorites: {
        type: [{}],
    },
});

export default mongoose.model("User", userSchema);
