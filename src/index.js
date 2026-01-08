const express= require("express")
const bodyParser=require("body-parser");
const {PORT}=require("./config/serverConfig")
const {sendBasicEmail}=require("./services/email-service")

const setupAndStartServer =()=>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded)

    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`)
        sendBasicEmail(
            'support@gmail.com',
             'firstflight184@gmail.com',
             "we are free now ",
             " we are freeeeeeee"
            
        )
    })
}
setupAndStartServer()
