const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task11-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connected to database')
}).catch(()=>{
    console.log('unable to connect',Error)
})