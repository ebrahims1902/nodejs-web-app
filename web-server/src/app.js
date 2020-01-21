const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()

// Define paths for Express config
const publicDirectoryPath  = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


// Setup handelbars engines and view  location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


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
        helpText: 'This is an help message',
        title : 'Help',
        name : 'Ebrahim'
    })
})
app.get('/weather',(req, res)=>{
    res.send({
        title : 'weather',
        name : 'Ebrahim'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title : '404',
        name : 'Ebrahim',
        errorMessage : 'Help article not found'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title : '404',
        name : 'Ebrahim',
        errorMessage : 'error page occer'
    })
})

app.listen(8080,()=>{
    console.log('server up on port 8080')
})