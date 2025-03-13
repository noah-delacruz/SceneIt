# SceneIt

A prototype application that allows users to search for movies by name using The Movie Database (TMDB) API

[PLACE IMAGE HERE]

## Features

- Movie search
- Trending movies
- Detailed movie information
- Search results counter
- Pagination
- Light/Dark mode theme toggle

## Tech Stack

- **Frontend**: React with Material-UI (MUI)
- **Backend**: Node.js with Express
- **API**: The Movie Database (TMDB) API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDB API token (Get one at https://developer.themoviedb.org/docs/getting-started)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/noah-delacruz/SceneIt.git
   cd SceneIt
   ```

2. Set up the backend
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend folder with your TMDB API token
   ```
   TMDB_API_TOKEN=your_api_token_here
   ```

4. Start the backend server
   ```bash
   npm run start
   ```

5. In a new terminal, set up the frontend
   ```bash
   cd frontend
   npm install
   ```

6. Start the frontend development server
   ```bash
   npm run dev
   ```

7. Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5173)

## API Endpoints

The backend runs on port 8080 and contains the following endpoints:

### `GET /api/movies/trending`
Returns a list of trending movies for the day.

**Example:**
```
GET http://localhost:8080/api/movies/trending
```

### `GET /api/movies/search`
Searches for movies based on query parameters.

**Parameters:**
- `query` (required): The search term
- `page` (optional): Page number for pagination (defaults to 1)

**Example:**
```
GET http://localhost:8080/api/movies/search?query=avengers&page=1
```

### `GET /api/movie/:id`
Returns detailed information about a specific movie.

**Parameters:**
- `id` (required): The TMDB movie ID

**Example:**
```
GET http://localhost:8080/api/movie/299534
```
