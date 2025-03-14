import { Button, TextField, Typography, Box } from "@mui/material";
import React from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        let response = await axios.post(
            "http://localhost:8080/api/users/login",
            {
                email,
                password,
            }
        );
        console.log(response);
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
