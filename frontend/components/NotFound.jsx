import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ my: 8 }}>
            <Paper
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <ErrorOutlineIcon
                    sx={{ fontSize: 80, color: "error.main", mb: 2 }}
                />

                <Typography variant="h4" gutterBottom>
                    404: Page Not Found
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 4 }}
                >
                    The page you're looking for doesn't exist
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate("/")}
                    >
                        Go to Home
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
