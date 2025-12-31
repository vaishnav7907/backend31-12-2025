const express=require("express")
const connectiion = require("./mongoDb/config")
const router = require("./router/userRouter")
const app=express()



connectiion()

app.use ("/",router);


app.listen(5009,console.log("ok...."))