const express =require('express')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.post('/users',(req,res)=>{
    console.log(req.body)
    res.send('testing!!!')
})

app.listen(port,()=>{
    console.log('server up on port ' + port)
})