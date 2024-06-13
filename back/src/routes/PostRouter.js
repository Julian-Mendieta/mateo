const { Router } = require("express")
const postController = require("../controllers/postController")
const { post } = require("../server")

const postRouter = Router()

postRouter.get("/",postController.getAllposts)

module.exports = postRouter