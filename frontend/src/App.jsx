import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchPage from "../components/SearchPage";
import MovieDetail from "../components/MovieDetail";

function App() {
    const [darkMode, setDarkMode] = React.useState(true);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                main: "#6171AF", // blue purple color for light mode
            },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/results" element={<SearchPage />} />
                    <Route path="details" element={<MovieDetail />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
