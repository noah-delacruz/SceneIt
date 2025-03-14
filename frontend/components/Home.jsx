import { Typography } from "@mui/material";
import MovieList from "./MovieList";

export default function Home() {
    return (
        <>
            <Typography textAlign="center" variant="h3" sx={{ pt: 1 }}>
                Trending Today
            </Typography>
            <MovieList
                movieRoute="http://localhost:8080/api/movies/trending"
                searchQuery=""
            />
        </>
    );
}
