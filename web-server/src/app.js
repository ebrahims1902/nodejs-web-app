const path = require('path')
const express = require('express')


const app = express()

const publicDirectoryPath  = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))


app.get('/weather',(req,res)=>{
    res.send('weather ...')
})

app.listen(8080,()=>{
    console.log('server up on port 8080')
})