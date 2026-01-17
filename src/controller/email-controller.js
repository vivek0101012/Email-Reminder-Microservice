const {emailService}=require("../config/container")

   

 const create=async(req,res)=>{    
    try {

console.log(req)
   const data=req.body;
   const response= await emailService.create(data);
   res.status(200).json({
         data:response,
         success:true,
         message:"successfull created the notification ticket ",
         err:{}
        })
        
    } catch (error) {      
           return res.status(500).json({
         data:{},
         success:false,
         message:"failed to complete the creation of email",
         err:error
        })
    }   
 }

module.exports={
    create
}
