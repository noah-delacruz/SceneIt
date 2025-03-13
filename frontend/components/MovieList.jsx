import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Box, Pagination } from "@mui/material";

export default function MovieList({ movieRoute, searchQuery, page }) {
    const [movies, setMovies] = React.useState([]);
    const [totalSearchResults, setTotalSearchResults] = React.useState(-1);
    const [totalPages, setTotalPages] = React.useState(-1);

    React.useEffect(() => {
        const getMovies = async () => {
            try {
                let params = {};

                if (searchQuery) {
                    params = { query: searchQuery };
                }

                const response = await axios.get(movieRoute, { params });
                console.log(response.data);
                setMovies(response.data.results);

                if (searchQuery) {
                    setTotalSearchResults(response.data.total_results);
                    setTotalPages(response.data.total_pages);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        getMovies();
    }, [searchQuery]);

    // Handle pagination changes and fetch new results
    const handlePageChange = async (e, page) => {
        try {
            let params = { query: searchQuery, page };
            const response = await axios.get(movieRoute, { params });
            setMovies(response.data.results);
        } catch (error) {
            console.error("Error getting new page data: ", error);
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
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />;
                })}
            </Box>
            <Box
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
            >
                {totalSearchResults === -1
                    ? ""
                    : `${totalSearchResults} results`}
                {totalPages === -1 ? (
                    ""
                ) : (
                    <Pagination
                        count={totalPages}
                        // count={Math.ceil(totalSearchResults / 10)}
                        onChange={handlePageChange}
                    />
                )}
            </Box>
        </div>
    );
}
