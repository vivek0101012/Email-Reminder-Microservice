const nodemailer=require("nodemailer")
const { EMAIL_ID ,EMAIL_PWD} = require("./serverConfig")

const sender=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PWD
    }
})

module.exports=sender