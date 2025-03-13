import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function MovieCard({ movie }) {
    // console.log(movie);

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

        // Return the formatted date string
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
                            {/* {movie.release_date.split("-")[0]} */}
                            {formatDate(movie.release_date)}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            className="movie-description"
                        >
                            {/* {movie.release_date.split("-")[0]} */}
                            {movie.overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

/*

{
    "backdrop_path": "/vZG7PrX9HmdgL5qfZRjhJsFYEIA.jpg",
    "id": 912649,
    "title": "Venom: The Last Dance",
    "original_title": "Venom: The Last Dance",
    "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
    "poster_path": "/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg",
    "media_type": "movie",
    "adult": false,
    "original_language": "en",
    "genre_ids": [
        28,
        878,
        12
    ],
    "popularity": 39.32,
    "release_date": "2024-10-22",
    "video": false,
    "vote_average": 6.798,
    "vote_count": 3000
}

*/
