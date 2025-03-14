import { useLocation } from "react-router-dom";
import MovieList from "./MovieList";

export default function SearchPage() {
    const location = useLocation();
    const { searchTerm } = location.state || "";
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/";

    return (
        <>
            <MovieList
                movieRoute={`${API_URL}api/movies/search`}
                searchQuery={searchTerm}
            />
        </>
    );
}
