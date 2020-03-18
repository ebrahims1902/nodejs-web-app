const express =require('express')
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



const bcrypt = require('bcrypt')

const myFunction = async()=>{
    const password = 'Ebrahim1902!'
    const hashedpassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedpassword)

    const isMatch = await bcrypt.compare('Ebrahim1902!', hashedpassword)
    console.log(isMatch)
}
myFunction()