const axios = require("axios");
const apiKey = process.env.API_KEY;

const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );

    const movieDetails = response.data;

    return movieDetails;
  } catch (error) {
    throw new Error(
      `An error occurred while fetching movie details for ID ${movieId}.`
    );
  }
};

// Fetch movies from TMDb API based on a specific list
const fetchMoviesByListAndPage = async (listType, page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${listType}`,
      {
        params: {
          api_key: apiKey,
          page: page,
        },
      }
    );

    const movieList = response.data.results;

    return movieList;
  } catch (error) {
    throw new Error(
      `An error occurred while fetching ${listType} movies, page ${page}.`
    );
  }
};

// Movie search controller
exports.searchMovies = async (req, res) => {
  const query = req.query.query; // User's search query
  const page = req.query.page || 1; // Page number (default: 1)

  if (!query) {
    return res
      .status(400)
      .json({ error: "Invalid search query. Please provide a valid query." });
  }

  try {
    // Make a request to TMDb API search endpoint
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: apiKey,
          query: query,
          page: page,
        },
      }
    );

    const searchResults = response.data.results;

    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ error: "An error occurred during movie search." });
  }
};

// Get movies from a specific list with pagination
exports.getMoviesByList = async (req, res, listType) => {
  const page = req.query.page || 1; // Page number (default: 1)

  try {
    const movies = await fetchMoviesByListAndPage(listType, page);
    res.json(movies);
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while fetching ${listType} movies, page ${page}.`,
    });
  }
};

// Get movie details by ID controller
exports.getMovieDetails = async (req, res) => {
  const movieId = req.params.movieId; // Movie ID from the route parameter

  try {
    const movie = await fetchMovieDetails(movieId);
    res.json(movie);
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while fetching movie details for ID ${movieId}.`,
    });
  }
};
