const request = require('request')

const geocode = (address,callback) =>{
    const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZWJyYWhpbTE5MDIiLCJhIjoiY2s0cDg1MDhpMDB1azNqbno4MndoZTZsNCJ9.6N9OGuczr6GjtFTAeD5LeQ'
    
    request({url,json: true}, (error,{body})=>{
        if(error){
            console.log ('unable to connect web services!!!!!!')
        }

        
        else if(body.features.length === 0){
            callback('unable to find location. try another search',undefined)
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}




module.exports = geocode