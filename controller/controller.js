var express = require('express')

const Company = require('../models/company')
var router = express.Router()




router.get('/getcompanies', (req, res) => {
      Company.find((err, employees) => {
            if (!err) {
                  console.log('Retreiving successfully')


                  res.json(employees)
            } else {

            }
      })
})

router.post('/postcompany', (req, res) => {
      console.log(req)
      let com = new Company({
            name: req.body.name,
            description:req.body.description,
            number: req.body.number,
            email: req.body.email,
            salary: req.body.salary,
            state:req.body.state,
            city:req.body.city
      })
      com.save((err, company) => {
            if (!err) {
                  console.log("company posted successfully")
                  res.json(company)
            } else {
                  console.log(err)
            }

      })
})


router.get('/getcompany/:id', (req, res) => {
      Company.findById(req.params.id,(err, company) => {
            if (!err) {
                  console.log('Id fetched...');
                  res.json(company)
                  console.log("Get by id successfull")
            } else {
console.log("An error occurred")
            }
      })
})


// router.put('/update/:id',(req,res)=>{
//   com={
//       name: req.body.name,
//       description:req.body.description,
//       number: req.body.number,
//       email: req.body.email,
//       salary: req.body.salary,
//       state:req.body.state,
//       city:req.body.city
//   }
//   Company.findOneAndUpdate(req.params.id,{$set:com},{new:true},(err,com)=>{
//         if (!err) {
//               res.json(com)
//               console.log('Updated Successfuly');
//         } else {
//               console.log("Updation Unsuccessfull");
//         }
//   })
// })

router.put("/update/:id",(req,res,next)=>{
  
      Company.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
          console.log(error)
        } else {
          res.json(data)
          console.log('Contact successfully updated!')
        }
      })
    })

router.delete("/delete/:id",(req,res)=>{
    Company.findByIdAndDelete(req.params.id,(err)=>{
   if (!err) {
         console.log("Deleted Successfully");
   } else {
         console.log('delete unsuccessfull');
   }
    })
})


module.exports = router