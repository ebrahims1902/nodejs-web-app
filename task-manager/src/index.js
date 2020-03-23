
const express = require('express')
const  multer = require('multer')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port,()=>{
    console.log('server up on port ' + port)
})