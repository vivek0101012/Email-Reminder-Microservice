const TicketRepository = require("../repository/ticket-repository");

const Sender= require("../config/emailConfig")
const { NotificiationTicket } = require("../models/index")
const EmailWorkflow =require("../workflow//emailWorkflow")

const EmailService = require ("../services/email-service");
const Emailworker= require("../worker/emailWorker")

const { EMAIL_ID } = require("./serverConfig");


const ticketRepository = new TicketRepository(NotificiationTicket)
const emailService = new EmailService(ticketRepository,Sender);
const emailWorkflow = new EmailWorkflow (emailService,EMAIL_ID)
const emailWorker = new Emailworker(emailWorkflow,emailService); 

module.exports ={
 emailService
 ,ticketRepository
 ,emailWorkflow
 ,emailWorker,
}