import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useLocation } from "react-router-dom";
import { formatDate } from "./helperFunctions";
import { Box, Container, Grid2, Paper } from "@mui/material";

export default function MovieDetail() {
    const location = useLocation();
    const { movie } = location.state || {};
    console.log(movie);

    return (
        <>
            {/* <CardMedia
                sx={{ maxWidth: 350 }}
                component="img"
                image={
                    movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                        : "https://image.tmdb.org/t/p/w500//4Xt8k4e6L1Zq2ykA6y2f3k2DDhR.jpg"
                }
                alt={movie.title}
            />
            <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {movie.title}
                        </Typography>
                        <Typography
                            variant="body4"
                            sx={{ color: "text.disabled", pb: 2 }}
                        >
                            {formatDate(movie.release_date)}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            className="movie-description"
                        >
                            {movie.overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> */}
            <Box
                sx={{
                    flexGrow: 1,
                }}
            >
                <Grid2 container>
                    <Grid2 size={3}>
                        <CardMedia
                            component="img"
                            image={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                    : "https://image.tmdb.org/t/p/w500//4Xt8k4e6L1Zq2ykA6y2f3k2DDhR.jpg"
                            }
                            alt={movie.title}
                        />
                    </Grid2>
                    <Grid2 size={8}>
                        <Container sx={{ py: 3 }}>
                            {/* Three horizontal lines */}
                            {/* {[1, 2, 3].map((item) => (
                                <Paper
                                    key={item}
                                    sx={{
                                        height: "4px",
                                        width: "100%",
                                        backgroundColor: "white",
                                        my: 3,
                                    }}
                                />
                            ))} */}
                            <Typography variant="h3" component="div">
                                {movie.title}
                            </Typography>
                            <Typography variant="body1" sx={{ pt: 1 }}>
                                {formatDate(movie.release_date)}
                            </Typography>
                        </Container>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}

/*

{
    "backdrop_path": "/GtWV2PAAFZYYHAy788RI6xOMJ8.jpg",
    "id": 610219,
    "title": "The Fire Inside",
    "original_title": "The Fire Inside",
    "overview": "Claressa Shields, a high school junior from Flint, Michigan, aided by her tough-love coach, Jason Crutchfield, pushes past all limitations to become the first American woman to win an Olympic gold medal in boxing. But even at the pinnacle of success, Claressa has to reckon with the fact that not all dreams are created equal, and the real fight has only just begun.",
    "poster_path": "/dMorkoCdZJ1xmKv0VAXcpUax6Ar.jpg",
    "media_type": "movie",
    "adult": false,
    "original_language": "en",
    "genre_ids": [
        36,
        18
    ],
    "popularity": 1.485,
    "release_date": "2024-12-25",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 23
}

*/
