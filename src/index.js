const express= require("express")
const bodyParser=require("body-parser");
const {PORT}=require("./config/serverConfig")
const jobs=require("./utils/job");
const {ticketRepository}=require("../src/config/container")
const setupAndStartServer =()=>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded)



    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`)
           jobs();
  

 
     
    })
}
setupAndStartServer()
