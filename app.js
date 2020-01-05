const  request = require('request')
const geocode = require('./utlis/geocode')
const forecast = require('./utlis/forecast')   

geocode('chennai',(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
})


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})