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

// GET /movies/search?query={searchTerm} - Search for movies
//      --url 'https://api.themoviedb.org/3/search/movie?query=pokemon&include_adult=false&language=en-US&page=1' \
app.get("/api/movies/search", async (req, res) => {
    let response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=pokemon&include_adult=false&language=en-US`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
            },
        }
    );
    console.log(response);
    res.send("/api/movies/search");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
