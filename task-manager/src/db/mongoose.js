const mongoose = require('mongoose')


mongoose.connect('mongodb://192.168.0.108:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})


