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
    messageOne.textContent='Loading data...'
    fetch('/weather?address='+ encodeURIComponent(address))
    .then((response)=>{
        
       response.json()
        .then((data)=> {
            if(data.error){
                messageOne.textContent = error;
            }else{
                messageOne.textContent= data.address;
                messageTwo.textContent = data.location + ',Temperature is '+ data.forecast.temperature;
            }
        });        
    })

})