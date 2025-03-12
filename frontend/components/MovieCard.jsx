import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function MovieCard({ movie }) {
    // console.log(movie);
    return (
        <>
            <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={{ width: "100%" }}
                        image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {movie.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                        >
                            {movie.release_date.split("-")[0]}
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
