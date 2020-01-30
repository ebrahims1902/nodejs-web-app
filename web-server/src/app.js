const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utlis/geocode')
const forecast = require('./utlis/forecast')

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
    if(!req.query.address){
        res.send({
            error: 'must provide an address'
        })
       
    }
    

    geocode(req.query.address,async function(error,{latitude, longitude, location}){
        if(error){
            return res.send({error})    
        }

       let data =  await forecast(latitude, longitude)
            
            console.log(">>>>>>>>>>>>",data)
            res.send({
                forecast:data,
                location,
                address:req.query.address
            })
    
    })
})


app.get('/products',(req,res)=>{

    if(!req.query.search){
        return res.send({
            error :'you must provid a search'
        })
    }

    console.log(req.query.search)
    res.send({
        products : []
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