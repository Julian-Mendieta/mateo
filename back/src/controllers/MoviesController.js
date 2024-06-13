const moviesService = require("../services/MovieService")

module.exports = {
    getMovies: async ( req, res) => {
        const movies= await moviesService.getMovies()
        res.status(200).json(movies)
    }
}
