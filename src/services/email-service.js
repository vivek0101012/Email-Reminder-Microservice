const sender= require("../config/emailConfig")

const sendBasicEmail=(mailfrom,mailto,mailSubject,mailBody)=>{

    sender.sendMail({
        form:mailfrom,
        to:mailto,
        subject:mailSubject,
        text:mailBody
    })

}

module.exports={

    sendBasicEmail
} 