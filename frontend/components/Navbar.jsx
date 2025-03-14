import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Tooltip } from "@mui/material";
import SearchBar from "./SearchBar";

export default function Navbar({ darkMode, toggleDarkMode }) {
    const navigate = useNavigate();
    const token = localStorage.getItem("jwtToken"); // Check if jwt token exists aka user is authenticated/logged in
    const handleLogout = () => {
        localStorage.removeItem("jwtToken"); // Remove token on logout
        navigate("/"); // Redirect to login page
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        <Link to="/" className="no-link-style">
                            Home
                        </Link>
                        {token && (
                            <Link
                                to="/favorites"
                                className="no-link-style"
                                style={{ paddingLeft: "30px" }}
                            >
                                Favorites
                            </Link>
                        )}
                    </Typography>
                    {darkMode ? (
                        <Tooltip title="Light Mode">
                            <IconButton>
                                <LightModeIcon
                                    onClick={toggleDarkMode}
                                ></LightModeIcon>
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Dark Mode">
                            <IconButton>
                                <DarkModeIcon
                                    onClick={toggleDarkMode}
                                ></DarkModeIcon>
                            </IconButton>
                        </Tooltip>
                    )}
                    <SearchBar />
                    {token ? (
                        <Typography
                            variant="h6"
                            onClick={handleLogout}
                            sx={{
                                pl: 2,
                                cursor: "pointer",
                            }}
                        >
                            Logout
                        </Typography>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="no-link-style"
                                style={{
                                    paddingLeft: "20px",
                                }}
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/register"
                                className="no-link-style"
                                style={{
                                    paddingLeft: "20px",
                                }}
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
