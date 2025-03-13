import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./NavbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Searching for movieTitle: " + searchTerm);

        navigate("results", { state: { searchTerm } });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                </Search>
            </form>
        </>
    );
}
