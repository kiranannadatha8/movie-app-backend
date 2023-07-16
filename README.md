# Movie Search Application Backend

This is the backend server for the Movie Search Application. It provides the necessary APIs to search for movies, fetch movie details, and retrieve movie lists such as now playing, popular, top rated, and upcoming.

The backend is built using Node.js, Express.js, and integrates with The Movie Database (TMDb) API to fetch movie data.

## Prerequisites

Before running the backend server, ensure you have the following prerequisites installed on your machine:

- Node.js (version 12 or higher)
- NPM (Node Package Manager)

## Getting Started

To run the backend server locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kiranannadatha8/movie-app-backend.git

2. cd your_folder.
3. npm install
4. npm start


## API Endpoints
The backend server provides the following API endpoints:

GET /api/movies/search: Search for movies based on a query.
GET /api/movies/details/:id : Get details of a specific movie.
GET /api/movies/now-playing: Get a list of now playing movies.
GET /api/movies/popular: Get a list of popular movies.
GET /api/movies/top-rated: Get a list of top rated movies.
GET /api/movies/upcoming: Get a list of upcoming movies.
