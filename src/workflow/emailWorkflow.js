const EmailService= require("../services/email-service")

class emailWorkflow{    
     /**
     * @param {EmailService} emailService
     * 
     */
    constructor(emailService,sender){

        this.emailService=emailService
        this.sender =sender
    }

    async execute(ticket){

        let result;
        try {
                const { id, recipientEmail, subject, content } = ticket;
                                    
           const info = await this.emailService.sendBasicEmail( 

           this.sender,
           recipientEmail,
           subject,
           content

        )
            console.log("sent the email")

        result =  this.emailService.validateEmailResponse(info);        
            
        } catch (error) {

            result =this.emailService.validateEmailResponse(error)
       
    }
 
    console.log(result);
    const data ={status:result.status}
    await this.emailService.updateStatus(ticket.id,data)

    }     
}
module.exports=emailWorkflow;



