const express = require('express');
var path = require('path');
const app= express();
const router = express.Router();
const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))
const Contact=require('../models/contacts')


const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');



router.get('/contact/getdata',ensureAuthenticated, (req, res) => {
    res.render('datab')
})


router.get('/contact/database', (req, res) => {

    if (!req.query.name) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

   



    
    
          var a = req.query.name
          var b= req.query.email
          var c =  req.query.password
          var d =req.query.additional
          var e=req.query.field
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d) 
        console.log(e) 


        const newContact = new Contact({
            name:a,
            email:b,
            password:c,
            additional:d,
            additionalfield:e
          });


          newContact
          .save()
          .catch(err => console.log(err));
  
    
        // db.collection('number').insertOne({
        //     name:a,
        //     age:b,
        //     email:c,
        //     password:d
        // },(error,result)=>{
        //     if(error){
        //         console.log('please provide other number',undefined)
        //     }
        //     console.log(undefined,'everything is fine')
        // })
        
    

})

module.exports= router;