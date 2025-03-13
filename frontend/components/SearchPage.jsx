import { useLocation } from "react-router-dom";
import MovieList from "./MovieList";

export default function SearchPage() {
    const location = useLocation();
    const { searchTerm } = location.state || "";
    console.log(searchTerm);
    return (
        <>
            <MovieList
                movieRoute="http://localhost:8080/api/movies/search"
                searchQuery={searchTerm}
            />
        </>
    );
}

//<MovieList movieRoute="http://localhost:8080/api/movies/trending" />
