const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath  = path.join(__dirname, '../public')
app.set('view engine','hbs')

app.use(express.static(publicDirectoryPath))



app.get('',(req,res)=>{
    res.render('index',{
        title : 'weather app',
        name : 'Ebrahim'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'my photo',
        name : 'Ebrahim'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'This is an help message'
    })
})

app.listen(8080,()=>{
    console.log('server up on port 8080')
})