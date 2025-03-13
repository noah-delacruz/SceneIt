import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { formatDate } from "./helperFunctions";

export default function MovieCard({ movie }) {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(movie);
        navigate("/details", { state: { movie } });
    };

    return (
        <>
            <Card sx={{ maxWidth: 350 }} onClick={handleClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={
                            movie.backdrop_path
                                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                : "https://image.tmdb.org/t/p/w500//4Xt8k4e6L1Zq2ykA6y2f3k2DDhR.jpg"
                        }
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
