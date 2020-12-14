"use strict";

document.querySelector('body').style.backgroundColor = "orange";

let info = document.querySelector('#info');
const api_key = 'f0114d0d816f423aa2269e7416edd496';
let mylocation, mylocationtext; 
$('#mybutton').click(function() {
        mylocationtext = $('.tt-search-result__address').text();
        mylocation = mylocationtext.split(",").shift();
        console.log(mylocation)
        getLocation(); 
});

function getLocation(){
    fetch(`https://api.weatherbit.io/v2.0/current?city=${mylocation}&country=GR&lang=el&key=${api_key}`)
    .then( res => {
        if (!res.ok) { throw res }
        return res.json() 
      })
     
    .then(result => {
        let humidity = result.data[0].rh;
        let name = result.data[0].city_name;
        //var myJSON = JSON.stringify(data);
        console.log(mylocation) 
        info.innerHTML = `<h1>Υγρασία</h1><p>${humidity}</p><p>${name}</p>`; 
    })
    .catch(err=>info.innerHTML = `<h1>Υγρασιόμετρο</h1><p>${err}</p>`)
}






