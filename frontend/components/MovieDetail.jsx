import React from "react";
import {
    Box,
    CardMedia,
    Container,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { formatDate, getImageUrl } from "./helperFunctions";

export default function MovieDetail() {
    const location = useLocation();
    const { movie } = location.state || {};
    console.log(movie);

    if (!movie) {
        return (
            <Typography variant="h5">Movie details not available</Typography>
        );
    }

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
                        <Typography variant="h3">{movie.title}</Typography>
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
