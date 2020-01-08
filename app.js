
const geocode = require('./utlis/geocode')
const forecast = require('./utlis/forecast') 

const address = process.argv[2]
if(!address){
    console.log('please provide an address')
}else{

    geocode(address,(error,data)=>{
    if(error){
      return  console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error){
       return console.log(error)
    }
    console.log(data.location)
    console.log(forecastData)
    })
})
}
