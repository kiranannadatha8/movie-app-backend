require("dotenv").config();
const express = require("express");
const moviesRoutes = require("./routes/moviesRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const corsOptions = require("./config/corsOption");
const app = express();
const PORT = process.env.PORT;

app.use(cors(corsOptions));

// Use the movies routes
app.use("/movies", moviesRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
