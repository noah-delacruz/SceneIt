import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
    return (
        <Box>
            {/* Position static allows for the footer to be at the bottom of the page */}
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: "flex", gap: 2 }}
                    >
                        <a
                            href="https://github.com/noah-delacruz/SceneIt"
                            target="_blank"
                            className="no-link-style"
                        >
                            <GitHubIcon fontSize="large" />
                        </a>
                        <a
                            href="https://github.com/noah-delacruz/SceneIt"
                            target="_blank"
                            className="no-link-style"
                        >
                            <LinkedInIcon fontSize="large" />
                        </a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
