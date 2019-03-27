const request = require('request');

const geocode = (address,callback)=>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYXJhdmluZGtpc2hvcmUiLCJhIjoiY2p0aW14cWx1MTVwZDRibGh0OHZvZ29jayJ9.qcpM7sAAoznm_OP7E9dVHg';
    request({url,json:true},(error,{body} = {})=>{
        // console.log(response);
        if(error){
           callback('Unable to reach the service at this time',undefined)
        }else if(body.features.length === 0){
         callback('Unable to find the location', undefined)
        }else{
         const lat = body.features[0].center[1];
         const lan = body.features[0].center[0];         
         callback(undefined, {
           lat,
           lan,
             place:body.features[0].place_name
         })
     }
     
     })
}

module.exports = geocode;