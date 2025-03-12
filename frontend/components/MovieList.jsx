import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";

export default function MovieList({ movieRoute }) {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        async function getMovies() {
            try {
                let response = await axios.get(movieRoute);
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
