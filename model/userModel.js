const mongoose=require("mongoose")


const userschema= new mongoose.Schema({
    Name:{type:String,required:true},
    Age:{type:Number,required:true},
    Email:{type:String,required:true, unique:true}
})


const modell=mongoose.model("studmodel",userschema)
module.exports=modell
