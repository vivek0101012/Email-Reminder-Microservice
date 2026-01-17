
const express = require("express");


const bodyParser=require("body-parser");
const {PORT}=require("./config/serverConfig")
const jobs=require("./utils/job");
const setupAndStartServer =()=>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    const apiRoutes= require("./routes/index")

 
    app.use('/api',apiRoutes)

    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`)
           jobs();
  

 
     
    })
}
setupAndStartServer()
