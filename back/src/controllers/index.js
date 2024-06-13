const userController= (req,res)=>{
    res.status(200.).send("solicitud recibida")
}
const postController = (req,res)=>{
    res.status(200).send("estamos enviando informacion sobre posts")
}

module.exports = {
    userController,
    postController
}