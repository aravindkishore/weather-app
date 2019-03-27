// fetch('http://localhost:3000/weather?address=boston')
//     .then((response)=>{
        
//        response.json()
//         .then((data)=> console.log(data));
//     })

const weatherForm = document.querySelector('form');
const searchLocation = document.querySelector('input');
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const address = searchLocation.value;
    messageOne.textContent='Loading data...';
    messageTwo.textContent = '';
    fetch('/weather?address='+ encodeURIComponent(address))
    .then((response)=>{
        
       response.json()
        .then((data)=> {
            if(data.error){
                messageOne.textContent = error;
            }else{
                messageOne.textContent= data.location;
                messageTwo.textContent = data.summary + ',Currently temperature is '+ data.forecast.temperature+' there is '+ data.forecast.precipProba+'% of rain. And Week summary is '+ data.forecast.dailySummary;
            }
        });        
    })

})