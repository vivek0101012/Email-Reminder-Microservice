const express= require("express")
const bodyParser=require("body-parser");
const {PORT}=require("./config/serverConfig")


const setupAndStartServer =()=>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded)

    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`)
    })
}
setupAndStartServer()
