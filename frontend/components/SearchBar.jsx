import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./NavbarStyles";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for movieTitle: " + searchTerm);
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
