import { Button, TextField, Typography, Box, Alert } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            let response = await axios.post(`${API_URL}api/users/login`, {
                email,
                password,
            });

            // Get JWT token and store in local storage to persist auth and to use in subsequent API requests
            const token = response.data.token;
            if (token) {
                localStorage.setItem("jwtToken", token);
                navigate("/"); // Redirect to home page
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error || "Invalid credentials");
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Typography variant="h3" gutterBottom>
                Sign in to your account
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
                id="email"
                label="Email address"
                variant="outlined"
                margin="normal"
                fullWidth
                sx={{ maxWidth: 400 }}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                sx={{ maxWidth: 400 }}
                onChange={(e) => setPassword(e.target.value)}
            />
            <form onSubmit={handleSubmit}>
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Sign In
                </Button>
            </form>
        </Box>
    );
}
