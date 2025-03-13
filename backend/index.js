import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import { connectToDB } from "./db.js";
import User from "./models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

dotenv.config();
connectToDB();

const app = express();

app.use(cors());
app.use(express.json());

// Get trending movies for the day
// https://developer.themoviedb.org/reference/trending-movies
app.get("/api/movies/trending", async (req, res) => {
    try {
        let response = await axios.get(
            "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
                },
            }
        );
        res.send(response.data);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch trending movie data",
            message: error.message,
        });
    }
});

// Search for movies
// https://developer.themoviedb.org/reference/search-movie
app.get("/api/movies/search", async (req, res) => {
    if (!req.query.query) {
        return res
            .status(400)
            .json({ error: "Missing required parameter: query" });
    }
    let page = 1;
    if (req.query.page) {
        page = req.query.page;
    }
    try {
        let query = req.query.query;
        let response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
                },
            }
        );
        res.send(response.data);
    } catch (error) {
        return res.status(500).json({
            error: "Failed to fetch movie data",
            message: error.message,
        });
    }
});

// Get details of a single movie
// https://developer.themoviedb.org/reference/movie-details
app.get("/api/movie/:id", async (req, res) => {
    let { id } = req.params;
    if (!id) {
        return res
            .status(400)
            .json({ error: "Missing required parameter: movie id" });
    }
    try {
        let response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
                },
            }
        );
        res.send(response.data);
    } catch (error) {
        return res.status(500).json({
            error: "Failed to fetch singular movie data",
            message: error.message,
        });
    }
});

// Register new user
app.post("/api/users", async (req, res) => {
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
        email: user.email,
    });
});

// Authenticate a user
app.post("/api/users/login", async (req, res) => {
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
            email: user.email,
        });
    }
    return res.status(400).json({
        error: "Invalid credentials",
    });
});

// // Get all of user's favorited movies
// app.get("/api/favorites", async (req, res) => {
//     const user = await User.find();
//     res.send(user);
// });

// app.post("/api/favorites", async (req, res) => {
//     if (!req.body.user) {
//         return res
//             .status(400)
//             .json({ error: "Missing required parameter: user" });
//     }
//     const user = await User;
// });

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
