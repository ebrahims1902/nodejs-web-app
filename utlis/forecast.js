const  request = require('request')



const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast//' + latitude + ',' + longitude
    request({ url: url,json: true}, (error,response)=>{
        if(error){
            callback('unable to connect to weather service',undefined)
        }else if (response.body.error){
            callback('unable to find location',undefined)
        }else{
            callback(undefined, console.log(response.body.daily.data[0].summary + 'it is currently ' + response.body.currently.temperature + ' farenheit. there is a '+ response.body.currently.precipProbability + ' % chance of rain.'))   
        }
    })
}
module.exports = forecast