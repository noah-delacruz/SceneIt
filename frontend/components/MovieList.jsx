import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Box, Typography } from "@mui/material";

export default function MovieList() {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        async function getMovies() {
            try {
                let response = await axios.get(
                    "http://localhost:8080/api/movies/trending"
                );
                // console.log(response.data);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        getMovies();
    }, []);

    return (
        <div>
            <Typography textAlign="center" variant="h3" sx={{ pt: 1 }}>
                Trending Movies
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "center",
                    padding: 2,
                }}
            >
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />;
                })}
            </Box>
        </div>
    );
}
