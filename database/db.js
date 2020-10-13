const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/company',{useFindAndModify:false, useNewUrlParser: true,useUnifiedTopology: true  },(err)=>{
if (!err) {
      console.log('MongoDB Connected Successfully')
} else {
      console.log("Connection Failed"+err);
}
})
module.exports=mongoose