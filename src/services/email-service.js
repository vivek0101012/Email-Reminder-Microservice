const Sender= require("../config/emailConfig")
const TicketRepository= require("../repository/ticket-repository")

class emailService {
   
    /**
     * @param {TicketRepository} ticketRepository 
     * @param {Sender} sender
     */
    constructor (ticketRepository,sender){
        this.ticketRepository = ticketRepository;
        this.sender= sender

    }
 async sendBasicEmail(mailfrom,mailto,mailSubject,mailBody){

    try {
        
        

        const response= await this.sender.sendMail({
        from:mailfrom,
        to:mailto,
        subject:mailSubject,
        text:mailBody
    })
    return response;
    } catch (error) {

        throw error
        
    }




}


validateEmailResponse (info){

    if (info instanceof Error){

        // Temporary issues (Network/Busy) -> RETRY (stays PENDING in DB)
        const temporaryErrors = ['ETIMEOUT', 'ECONNRESET', 'EADDRINUSE'];
        const is4xx = info.responseCode?.toString().startsWith('4');

        if (temporaryErrors.includes(info.code) || is4xx) {
            return {
                status: 'RETRY', // Or 'PENDING' depending on your loop logic
                reason: `Temporary: ${info.message}`
            };
        }

        // Permanent issues (Auth failure / Bad address) -> FAILED
        return {
            status: 'FAILED',
            reason: `Permanent: ${info.message}`
        };
        
    }

    if (info.accepted && info.accepted.length > 0) {
            return {
                status: 'SUCCESS',
                reason: info.response // e.g., "250 2.0.0 OK"
            };
        }


return {
            status: 'FAILED',
            reason: 'Recipient rejected by provider'
        };


}
async updateStatus (id,data){

    try {
         
        await this.ticketRepository.updateStatus(id,data);
        


    } catch (error) {
        throw error 
        
    }

}
 async fetchPendingEmails  (timestamp){
    try {
    
        const response= await this.ticketRepository.getPending(timestamp);
        return response;
    } catch (error) {
        throw error
    }
}

}

module.exports=emailService

