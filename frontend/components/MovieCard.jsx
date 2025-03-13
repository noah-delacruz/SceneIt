import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function MovieCard({ movie }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month} ${day}, ${year}`;
    };

    return (
        <>
            <Card sx={{ maxWidth: 350 }}>
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
