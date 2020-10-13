var mongoose=require('mongoose')

var Company=mongoose.model('Company',{
      name:{type:String,  required: true},
      description:{type:String,required:true},
      number:{type:Number,  required: true},
      email:{type:String,  required: true},
      salary:{type:Number,  required: true},
      state:{type:String  },
      city:{type:String}
})
module.exports=Company