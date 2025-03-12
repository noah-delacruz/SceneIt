import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: "flex", gap: 2 }}
                    >
                        <IconButton>
                            <Link
                                to="https://github.com/noah-delacruz/SceneIt"
                                className="no-link-style"
                            >
                                <GitHubIcon fontSize="large" />
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link
                                to="https://www.linkedin.com/in/noahdelacruz/"
                                className="no-link-style"
                            >
                                <LinkedInIcon fontSize="large" />
                            </Link>
                        </IconButton>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
