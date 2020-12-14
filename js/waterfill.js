let count=$("#count"); 
let water=$("#water");
let percent=count.text();
let myinterval; 
let input = document.querySelector('input');

function showpercent(){
myinterval = setInterval(function(){ 
  for (var i = 1; i < myinterval; i++){
    window.clearInterval(i);
   }
  percent++; 
  count.html(percent); 
  water.css({
    "-webkit-transform":'translate(0'+','+(100-percent)+'%)',
    "-ms-transform":'translate(0'+','+(100-percent)+'%)',
    "transform":'translate(0'+','+(100-percent)+'%)'
  }); 
     if(percent==Math.round(humidity)){
         clearInterval(myinterval);
         for (var i = 1; i < myinterval; i++){
          window.clearInterval(i);
         } 
     }
},60);
}






