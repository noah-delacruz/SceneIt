import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Register new user
router.post("/api/users", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            error: "Missing required parameters: email and/or password",
        });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({
            error: "User already exists",
        });
    }

    // Hash password via bcrypt
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        email,
        password: hashedPassword,
        favorites: [{}],
    });
    if (!user) {
        return res.status(400).json({
            error: "Invalid user data",
        });
    }

    res.json({
        _id: user.id,
        email: user.email,
        favorites: user.favorites,
        token: generateToken(user._id),
    });
});

// Authenticate a user
router.post("/api/users/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            error: "Missing required parameters: email and/or password",
        });
    }

    // Check if users email is registered
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({
            error: "User not registered",
        });
    }

    // Compare what user inputted for password vs hashed password in the DB
    const passwordIsCorrect = await bcrypt.compare(password, user.password);
    if (user && passwordIsCorrect) {
        return res.json({
            _id: user.id,
            email: user.email,
            favorites: user.favorites,
            token: generateToken(user._id),
        });
    }
    return res.status(400).json({
        error: "Invalid credentials",
    });
});

// Generate JsonWebToken
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

export default router;
