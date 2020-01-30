const  request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/42fdc33db07a21cca70fb3416b97ac8b/' + latitude + ',' + longitude
    request({url,json: true}, (error,{body})=>{
        if(error){
            callback('unable to connect to weather service. please try again.',undefined)
        }else if (body.error){
            callback('unable to find location',undefined)
        }else{
            callback(undefined, console.log(body.daily.data[0].summary + 'it is currently ' + body.currently.temperature + ' farenheit. there is a '+ body.currently.precipProbability + ' % chance of rain.'))   
        }
    })
}
module.exports = forecast
