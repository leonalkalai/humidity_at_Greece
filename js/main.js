"use strict";
 
document.querySelector('body').style.backgroundColor = "#f2f2f2";

let info = $('#info');
let errormessage = $('#errormessage');
let resulthum;
const api_key = 'QRYWITMZ175B338F1MEAWD214';
let mylocation, mylocationtext,humidity,locationsname; 

info.append(`<p id="entervalue">Εισάγετε τιμή</p>`);

$('input').on('change',function () {
  $('#mybutton').on('click', function() {
   percent=0; 
   getLocation();
  });
});


function getLocation(){
    mylocationtext = $('.tt-search-result__address').text();
    mylocation = mylocationtext.split(",").shift();
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&period=today&maxStations=-1&maxDistance=-1&contentType=json&unitGroup=metric&locationMode=array&key=${api_key}&language=el-GR&countrySet=GR/GRC&dataElements=default&locations=${mylocation}`)
    .then( res => {
        if (!res.ok) { throw res }
        return res.json() 
      })
    .then(data => { 
        errormessage.innerHTML = "";
        humidity = data.locations[0].values[0].humidity;
        locationsname = data.locations[0].name; 
        resulthum = document.querySelector('.tt-search-result__distance');
        resulthum.innerHTML = `<p>${Math.round(humidity)}%</p><p>${locationsname}</p>`;  
        let search_result_text = $('.tt-search-result__distance > p:eq(1)').text();
        let searchcommapos = search_result_text.indexOf(",", search_result_text.indexOf(",") + 1);
        let searchtext = search_result_text.substring(searchcommapos+1);
        $('.tt-search-result__distance > p:eq(1)').html(searchtext);
        $('#entervalue').html('');
    })
    .then(function() {
      showpercent();
    })
    .catch( err => {
      //errormessage.innerHTML = `${err}`;
      if(err=="TypeError: Cannot read property '0' of undefined"){
        errormessage.innerHTML = `Εισάγετε τιμή`;
        $('#entervalue').html(`Εισάγετε τιμή`);
          clearInterval(myinterval);
          for (var i = 1; i < myinterval; i++){
           window.clearInterval(i);
          } 
          percent=0; 
          count.html(0); 
          water.css({
            "-webkit-transform":'translate(0'+','+(100-percent)+'%)',
            "-ms-transform":'translate(0'+','+(100-percent)+'%)',
            "transform":'translate(0'+','+(100-percent)+'%)'
          });
      }
    });
}








