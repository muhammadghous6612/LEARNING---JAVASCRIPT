// var now=new Date();
// document.write(now + '</br>'+'</br>');

// document.write(now.getDate()+ '</br>'+'</br>');


// document.write(now.getDay()+ '</br>'+'</br>');
// document.write(now.getFullYear()+ '</br>'+'</br>');
// document.write(now.getHours()+ '</br>'+'</br>');
// document.write(now.getUTCFullYear()+ '</br>'+'</br>');
// document.write(now.getSeconds()+ '</br>'+'</br>');
// document.write(now.getMonth()+ '</br>'+'</br>');
// document.write(now.getTimezoneOffset()+ '</br>'+'</br>');

// var userAGE=prompt("enter your birth year")

var hours=document.getElementById('hour')
var minutes=document.getElementById('minutes')
var seconds=document.getElementById('seconds')

setInterval(function(){
var currentDate=new Date();



hour.innerText=currentDate.getHours();

if(currentDate.getminutes()<10){
    minutes="0"+ currentDate.getminutes();
}else{
    minutes= currentDate.getminutes();
}
minutes.innerText= minutes;

if(currentDate.getSeconds()<10){
    seconds="0"+ currentDate.getSeconds();
}else{
    seconds= currentDate.getSeconds();
}
seconds.innerText=seconds;

},1000);


var now=new Date();
var bd= new Date("21/05/2005s");
var milliseconds=now.getTime();
var bdmilliseconds=bd.getTime();
var diff= milliseconds-bdmilliseconds;
// var diff=now-bd;
console.log("millsecond=>"+ Math.round(diff ));
console.log("seconds=>"+ Math.round(diff / 1000));
console.log("minutes=>"+ Math.round(diff / 1000/60));
console.log("hours=>"+ Math.round(diff / 1000/60/60));
console.log("days=>"+ Math.round(diff / 1000/60/60/24));
console.log("month=>"+ Math.round(diff / 1000/60/60/24/30));
console.log("year=>"+ Math.round(diff / 1000/60/60/24/30/12));

