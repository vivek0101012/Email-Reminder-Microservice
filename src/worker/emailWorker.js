const EmailService= require("../services/email-service")
const EmailWorkflow = require("../workflow/emailWorkflow")

class EmailWorker {

     /**
     * @param {EmailService} emailService
     * @param {EmailWorkflow} emailWorkflow
     */
    constructor(emailWorkflow,emailService){

        this.emailService=emailService;
        this.emailWorkflow=emailWorkflow;

    }
    async run(){
        try {
            
         const timestamp= new Date();
         const Tickets=await  this.emailService.fetchPendingEmails(timestamp);
      
             
    const promises = Tickets.map(ticket => 
        this.emailWorkflow.execute(ticket.dataValues)
    );

    
    await Promise.allSettled(promises);

   
        } catch (error) {

               throw error;
            

        }        
    }
}

module.exports= EmailWorker