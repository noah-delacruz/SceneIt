import { Box, Button, Typography } from "@mui/material";
import MovieList from "./MovieList";
import React from "react";

export default function Home() {
    const [timeframe, setTimeframe] = React.useState("day");
    const [todayButton, setTodayButton] = React.useState(true);
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/";

    const handleTodayClick = () => {
        setTodayButton(true);
        setTimeframe("day");
    };

    const handleWeekClick = () => {
        setTodayButton(false);
        setTimeframe("week");
    };
    return (
        <>
            <Typography textAlign="center" variant="h3" sx={{ pt: 1 }}>
                Trending
                <Box sx={{ pl: 2 }}></Box>
                {todayButton ? (
                    <Button variant="contained" onClick={handleTodayClick}>
                        Today
                    </Button>
                ) : (
                    <Button variant="text" onClick={handleTodayClick}>
                        Today
                    </Button>
                )}
                {todayButton ? (
                    <Button variant="text" onClick={handleWeekClick}>
                        This Week
                    </Button>
                ) : (
                    <Button variant="contained" onClick={handleWeekClick}>
                        This Week
                    </Button>
                )}
            </Typography>
            <MovieList
                movieRoute={`${API_URL}api/movies/trending`}
                searchQuery=""
                timeframe={timeframe}
            />
        </>
    );
}
