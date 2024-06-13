const { Router } = require("express")
const { post } = require("../server")
const MoviesController = require("../controllers/MoviesController")

const postRouter = Router()

postRouter.get("/",MoviesController.getMovies)

module.exports = postRouter