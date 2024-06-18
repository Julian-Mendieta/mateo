const Movie = require("../models/Movie")

module.exports = {
    getMovies : async () => {
      const Movies = await Movie.find();
      return Movies
    }
}