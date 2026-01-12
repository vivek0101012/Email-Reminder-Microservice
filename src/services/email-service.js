const sender= require("../config/emailConfig")
const TicketRepository= require("../repository/ticket-repository")

class emailService {
 async sendBasicEmail(mailfrom,mailto,mailSubject,mailBody){

    try {
        
        const response= sender.sendMail({
        form:mailfrom,
        to:mailto,
        subject:mailSubject,
        text:mailBody
    })
    return response;
    } catch (error) {

        throw error
        
    }



}

 fetchPendingEmails =async (timestamp)=>{
    try {
        const repo=new TicketRepository();
        const response= await repo.getPending(timestamp);
        console.log(response)
        return response;
    } catch (error) {
        throw error
    }
}

}

module.exports=emailService


// {
//   accepted: [ 'firstflight184@gmail.com' ],
//   rejected: [],
//   ehlo: [
//     'SIZE 35882577',
//     '8BITMIME',
//     'AUTH LOGIN PLAIN XOAUTH2 PLAIN-CLIENTTOKEN OAUTHBEARER XOAUTH',
//     'ENHANCEDSTATUSCODES',
//     'PIPELINING',
//     'CHUNKING',
//     'SMTPUTF8'
//   ],
//   envelopeTime: 804,
//   messageTime: 1291,
//   messageSize: 278,
//   response: '250 2.0.0 OK  1768142997 d2e1a72fcca58-81c4905ca83sm10512319b3a.38 - gsmtp',
//   envelope: { from: '', to: [ 'firstflight184@gmail.com' ] },
//   messageId: '<64216d02-591e-a37c-1c76-1cabc6d0258b@localhost>'
// }


