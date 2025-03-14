import React from "react";
import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { formatDate, getImageUrl } from "./helperFunctions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

export default function MovieDetail() {
    const location = useLocation();
    const { movie } = location.state || {};
    const token = localStorage.getItem("jwtToken");
    const [favorites, setFavorites] = React.useState([]);
    const [favorited, setFavorited] = React.useState(false);

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
        setFavorites(response.data);

        // Check if the movie is already liked
        const isMovieFavorited = response.data.find(
            (currMovie) => currMovie.id === movie.id
        );
        if (isMovieFavorited) {
            setFavorited(true);
        }
    };

    React.useEffect(() => {
        if (token) {
            getFavorites();
        }
    }, [token]);

    if (!movie) {
        return (
            <Typography variant="h5">Movie details not available</Typography>
        );
    }

    const handleLikeClick = async () => {
        console.log(movie);
        const response = await axios.post(
            "http://localhost:8080/api/users/favorites",
            {
                movie,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        setFavorited(true);
    };

    const handleRemoveLikeClick = async () => {
        console.log(movie);
        const response = await axios.delete(
            "http://localhost:8080/api/users/favorites",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: { movie }, // Delete requests do not support passing movie in body. Must be placed inside a data object
            }
        );
        setFavorited(false);
    };

    const convertRuntime = (minutes) => {
        if (!minutes) return "Unknown duration";
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={3}>
                    <CardMedia
                        component="img"
                        image={getImageUrl(movie.poster_path)}
                        alt={movie.title}
                        sx={{ width: "100%", borderRadius: 2 }}
                    />
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <Container sx={{ py: 3 }}>
                        <Typography gutterBottom variant="h3">
                            {movie.title}
                        </Typography>
                        {token && !favorited ? (
                            <FavoriteBorderIcon onClick={handleLikeClick} />
                        ) : token && favorited ? (
                            <FavoriteIcon onClick={handleRemoveLikeClick} />
                        ) : null}

                        <Typography variant="body1" sx={{ pt: 1 }}>
                            {formatDate(movie.release_date)} •{" "}
                            {movie.genres
                                ?.map((genre) => genre.name)
                                .join(", ")}{" "}
                            • {convertRuntime(movie.runtime)}
                        </Typography>
                        <Typography variant="body1" sx={{ pt: 1 }}>
                            {movie.vote_average
                                ? `${movie.vote_average * 10}% User Score`
                                : "No rating available"}
                        </Typography>
                        {movie.tagline && (
                            <Typography
                                variant="body1"
                                sx={{
                                    pt: 1,
                                    fontStyle: "italic",
                                    color: "text.secondary",
                                }}
                            >
                                {movie.tagline}
                            </Typography>
                        )}
                        <Typography variant="h5" sx={{ pt: 1 }}>
                            Overview
                        </Typography>
                        <Typography variant="body1">
                            {movie.overview}
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
}
