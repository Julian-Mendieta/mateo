const app = require("./src/server")
const dbCon = require("./src/config/conDB")

dbCon().then(
    res=>{
    app.listen(3000,()=>{
    console.log("server conectado 3000")
    })
})

