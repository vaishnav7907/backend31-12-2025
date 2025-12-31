const modell = require("../model/userModel")

const studentCreate= async (req,res)=>{

const{Name,Age,Email}= req.body



try {
    const studDetails= await modell.create({
      Name,Age,Email  
    })

    res.json({status:true,data:studDetails,boss:"success"})
} catch (error) {
    res.json({status:false,error:{} })
    return res.status(5000).json("something went wrong")
}

}


module.exports=studentCreate;