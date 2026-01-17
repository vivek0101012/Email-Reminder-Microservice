const emailController=require("../../controller/email-controller")
const express =require("express")

const router=express.Router();
router.post('/emails',emailController.create)



module.exports=router;