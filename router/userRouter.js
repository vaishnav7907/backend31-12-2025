const express=require("express")
const studentCreate = require("../controller/usercontroller")


const router=express.Router()
router.route("/").post(studentCreate)




module.exports=router;