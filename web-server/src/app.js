const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath  = path.join(__dirname, '../public')
const viewspath = path.join(__dirname,'../templates')

// Setup handelbars engines and view  location
app.set('view engine','hbs')
app.set('views',viewspath)

// Setup static directory to serve
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