import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";

export default function MovieList({ movieRoute, searchQuery }) {
    const [movies, setMovies] = React.useState([]);
    const [totalSearchResults, setTotalSearchResults] = React.useState(-1);
    console.log(searchQuery);

    React.useEffect(() => {
        async function getMovies() {
            try {
                if (searchQuery === "") {
                    let response = await axios.get(movieRoute);
                    console.log(response.data);
                    setMovies(response.data.results);
                    console.log(response.data.total_results);
                } else {
                    let response = await axios.get(movieRoute, {
                        params: { query: searchQuery },
                    });
                    console.log(response.data);
                    setMovies(response.data.results);
                    setTotalSearchResults(response.data.total_results);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        getMovies();
    }, [searchQuery]);

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
            <Box sx={{ textAlign: "center", mb: 2 }}>
                {totalSearchResults === -1
                    ? ""
                    : `${totalSearchResults} results`}
            </Box>
        </div>
    );
}
