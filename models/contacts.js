const mongoose=require('mongoose');


const ContactSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    additional:{
        type:String
        
    },
    additionalfield:{
        type:String
    },
    
    date:{
        type:Date,
        default:Date.now
    }


});

const Contact=mongoose.model('Contact',ContactSchema);

module.exports=Contact;