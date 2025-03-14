import React from "react";
import axios from "axios";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
    const navigate = useNavigate();
    const token = localStorage.getItem("jwtToken");
    const [favoriteMovies, setFavoriteMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/";

    const getFavorites = async () => {
        try {
            setLoading(true);
            let response = await axios.get(`${API_URL}api/users/favorites`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setFavoriteMovies(response.data);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (!token) {
            navigate("*");
        }
        if (token) {
            getFavorites();
        }
    }, [token]);

    if (loading) {
        return (
            <Backdrop
                sx={(theme) => ({
                    color: "#fff",
                    zIndex: theme.zIndex.drawer + 1,
                })}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

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
