import { Button, TextField, Typography, Box } from "@mui/material";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        try {
            let response = await axios.post(
                "http://localhost:8080/api/users/login",
                {
                    email,
                    password,
                }
            );
            console.log(response);
            // Get JWT token and store in local storage to persist auth and to use in subsequent API requests
            const token = response.data.token;
            if (token) {
                localStorage.setItem("jwtToken", token);
                // Redirect to home page
                navigate("/");
            }
            // navigate("/details", { state: { movie: response.data } });
        } catch (error) {
            console.error("Failed to login: ", error);
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
