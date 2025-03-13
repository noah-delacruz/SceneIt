import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(process.env.TMDB_API_TOKEN);
});

// Get trending movies
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

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
