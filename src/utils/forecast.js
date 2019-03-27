const request = require('request');

const forecast = (lat,lan,callback)=>{
    const url = 'https://api.darksky.net/forecast/47ace568ba0d02d6172e1192a335db19/'+lat+','+lan;
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to reach service',undefined);
        }else if(body.error){
            callback('Unbale to find service for given location',undefined)
        }else{    
            const {temperature,precipProbability,summary} = body.currently;   
            const dailySummary = body.daily.summary;   
        callback(undefined,{
            temperature,
            summary,
            dailySummary,
            precipProba: precipProbability
        });
        }
    });
}

module.exports= forecast;