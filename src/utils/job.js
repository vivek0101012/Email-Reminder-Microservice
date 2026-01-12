const cron = require('node-cron')
const emailService=require("../services/email-service");
const { EMAIL_ID} = require("../config/serverConfig")


/*
*run the cron job each five minutes
*query the db for pending or failed  rows sort based on time
*if time_sent date <= current time date  send them and update the db based on the result obtained
*/

const setupJobs=async ()=>{
    cron.schedule(' */2 * *  * *',async () => {
    // buisness logic fn from services;
        let currentDate=new Date()

  const response= await emailService.fetchPendingEmails(currentDate);
  response.forEach(element => {
    let data=element.dataValues;
    
    emailService.sendBasicEmail(EMAIL_ID,data.recipientEmail,data.subject,data.content)
    // console.log(element.dataValues)
    // emailService.sendBasicEmail("firstflight184@gmail.com",element.data)
  });
});

  // id: 3,
  // subject: 'Weekly Summary',
  // content: 'Here is your weekly summary',
  // recipientEmail: 'firstflight184@gmail.com',
  // status: 'SUCCESS',
  // notificationTime: 2026-01-09T00:48:13.000Z,
  // createdAt: 2026-01-09T00:48:13.000Z,
  // updatedAt: 2026-01-09T00:48:13.000Z
}
module.exports = setupJobs;