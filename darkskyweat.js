const request = require('request')


const url = 'https://api.darksky.net/forecast'

 request({ url: url,json: true}, (error,response)=>{
     if(error){
        console.log ('unable to connect web services!')
     }else if(response.body.features){
      console.log('unable to find location.try another search.') 
     }
     else{
     console.log(response.body.daily.data[0].summary + 'it is currently ' + response.body.currently.temperature + ' farenheit. there is a '+ response.body.currently.precipProbability + ' % chance of rain in chennai.')
     }
 })