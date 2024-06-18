const mongoose = require("mongoose")

const dbCon = async () => {
   await mongoose.connect("mongodb+srv://gilhandresmateo:qy9EgNx1jfWqp3Qp@prueba.nhmoxyg.mongodb.net/prueba?retryWrites=true&w=majority&appName=Prueba")
}

module.exports = dbCon