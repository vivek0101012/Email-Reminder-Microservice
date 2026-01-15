const cron = require('node-cron')

const {emailWorker} = require ("../config/container")

let isRunning=false;

const setupJobs=async ()=>{
    cron.schedule('*/10 * * * * *',async () => {

      if(isRunning){
        console.log("last worker still running ")
        return
      }
      isRunning=true
       
      try {
            await emailWorker.run();
        

              } catch (error) {

        console.log(error);
      }
      finally{
        isRunning=false
      }
       
      
 
      ;
});


}
module.exports = setupJobs;