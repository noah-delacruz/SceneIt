# SceneIt

A full stack website that allows users to search for movies by name using The Movie Database (TMDB) API. SceneIt provides the ability to discover trending movies, access detailed information about movies, and saving favorites to a collection.

![482126821_544283925349727_6524427605696279576_n](https://github.com/user-attachments/assets/0adc8bc1-1fba-4598-ac87-d065b49ed3a0)


## Features

-   Movie search
-   View trending movies for today or the week
-   Click on movie for detailed information
-   Search results counter
-   Pagination
-   Light/Dark mode theme toggle
-   User authentication
-   Add to favorites collection
-   Error feedback during sign in/sign up

## Tech Stack

-   **Frontend**: React with Material-UI (MUI)
-   **Backend**: Node.js with Express
-   **API**: The Movie Database (TMDB) API
-   **Database**: MongoDB with Mongoose
-   **Authentication**: JWT (JSON Web Tokens) with bcrypt for password hashing
-   **Deployment**: Frontend deployed on Vercel and Backend/DB deployed on Render

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn
-   TMDB API token (Get one at https://developer.themoviedb.org/docs/getting-started)
-   MongoDB Atlas account for database connection

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

3. Create a `.env` file in the backend folder with the following:

    ```
    TMDB_API_TOKEN=your_api_token_here
    MONGODB_CONNECTION_STRING=your_mongodb_uri_here
    JWT_SECRET=your_jwt_secret_here
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
