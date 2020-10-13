
const express=require('express')
const bodyParser=require('body-parser')

const cors = require("cors");

const mongoose=require('./database/db')


var companycontroller=require("./controller/controller")
var app=express()
app.use(cors());
app.use(bodyParser.json())
app.listen(3000,()=>{
      console.log('Server Started at  port:3000');
})
app.use("/company",companycontroller)


