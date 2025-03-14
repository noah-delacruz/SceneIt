import React from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

export default function Favorites() {
    const token = localStorage.getItem("jwtToken");
    const [favoriteMovies, setFavoriteMovies] = React.useState([]);
    const getFavorites = async () => {
        let response = await axios.get(
            "http://localhost:8080/api/users/favorites",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data);
        setFavoriteMovies(response.data);
    };

    React.useEffect(() => {
        if (token) {
            getFavorites();
        }
    }, [token]);

    return (
        <>
            {favoriteMovies.length === 0 ? (
                <Box height="100vh">
                    <Typography textAlign="center" variant="h3" sx={{ pt: 1 }}>
                        No movies favorited
                    </Typography>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                        padding: 2,
                    }}
                >
                    {favoriteMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </Box>
            )}
        </>
    );
}
