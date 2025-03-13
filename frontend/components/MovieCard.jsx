import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { formatDate, getImageUrl } from "./helperFunctions";
import axios from "axios";

export default function MovieCard({ movie }) {
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            // Get detailed movie info to pass on to MovieDetail component
            const response = await axios.get(
                `http://localhost:8080/api/movie/${movie.id}`
            );
            navigate("/details", { state: { movie: response.data } });
        } catch (error) {
            console.error("Failed to fetch movie details: ", error);
        }
    };

    return (
        <>
            <Card sx={{ maxWidth: 350 }} onClick={handleClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={getImageUrl(movie.backdrop_path)}
                        alt={movie.title}
                    />
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
            </Card>
        </>
    );
}
