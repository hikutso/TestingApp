const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect('mongodb://hiku:L2dXepj0OwZtetq6zjmb5t5B22zufp41UOW20RFi1nLdCDiaJEA6gNIan9oSrhuLY1dgBsBKmA1ZSJ17isiIkQ==@hiku.mongo.cosmos.azure.com:10255/?ssl=true&appName=@hiku@'||'mongodb://127.0.0.1:27017/task11-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connected to database')
}).catch(()=>{
    console.log('unable to connect',Error)
})