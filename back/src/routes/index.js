const { Router } = require("express")
const userRouter= require("./userRouter")
const postRouter= require("./PostRouter")
const movieRouter = require("./MovieRouter")
// const movieRouter= require("./")
// const MoviesController = require("../controllers/MoviesController")

const router = Router()

router.use("/users", userRouter)

router.use("/post", postRouter)

router.use("/movies",movieRouter)

module.exports = router