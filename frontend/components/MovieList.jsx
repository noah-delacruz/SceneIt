import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Box, Pagination } from "@mui/material";

export default function MovieList({ movieRoute, searchQuery, timeframe }) {
    const [movies, setMovies] = React.useState([]);
    const [totalSearchResults, setTotalSearchResults] = React.useState(-1);
    const [totalPages, setTotalPages] = React.useState(-1);

    React.useEffect(() => {
        const getMovies = async () => {
            try {
                let params = {};

                if (searchQuery) {
                    params.query = searchQuery;
                }

                if (timeframe) {
                    params.timeframe = timeframe;
                }

                const response = await axios.get(movieRoute, { params });
                setMovies(response.data.results);

                if (searchQuery) {
                    setTotalSearchResults(response.data.total_results);
                    setTotalPages(response.data.total_pages);
                }
            } catch (error) {
                throw error;
            }
        };

        getMovies();
    }, [searchQuery, timeframe]);

    // Handle pagination changes and fetch new results
    const handlePageChange = async (e, page) => {
        try {
            let params = { query: searchQuery, page };
            const response = await axios.get(movieRoute, { params });
            setMovies(response.data.results);
        } catch (error) {
            throw error;
        }
    };

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
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Box>
            <Box
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
            >
                {totalSearchResults === -1
                    ? ""
                    : `${totalSearchResults} results`}
                {totalPages > 1 && (
                    <Pagination
                        count={totalPages}
                        onChange={handlePageChange}
                    />
                )}
            </Box>
        </div>
    );
}
