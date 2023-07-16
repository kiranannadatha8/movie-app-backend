// routes/moviesRoutes.js

const express = require("express");
const moviesController = require("../controllers/moviesController");

const router = express.Router();

// Movie search route with pagination
router.get("/search", moviesController.searchMovies);

// Now playing movies route with pagination
router.get("/now-playing", (req, res) =>
  moviesController.getMoviesByList(req, res, "now_playing")
);

// Popular movies route with pagination
router.get("/popular", (req, res) =>
  moviesController.getMoviesByList(req, res, "popular")
);

// Top rated movies route with pagination
router.get("/top-rated", (req, res) =>
  moviesController.getMoviesByList(req, res, "top_rated")
);

// Upcoming movies route with pagination
router.get("/upcoming", (req, res) =>
  moviesController.getMoviesByList(req, res, "upcoming")
);

// Movie Details by id
router.get("/details/:movieId", moviesController.getMovieDetails);

module.exports = router;
