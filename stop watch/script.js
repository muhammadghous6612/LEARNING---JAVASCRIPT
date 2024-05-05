let month=document.getElementById("month");
let day=document.getElementById(" day");
let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
let millisecond=document.getElementById("millisecond");


setInterval (function(){
	var now = new date();
var eiddate=new date("17/06/2024");
var nowgettime= now.gettime();
var eidgettime=eiddate.gettime();
var diff= eidgettime-nowgettime ;


var onemonth=30*24*60*60*1000;
var oneday=24*60*60*1000;
var onehour=60*60*1000;
var oneminute=60*1000;,l
var onesecond=1000;


var eidmonths =  (diff / onemonth);
var eidDays =  (diff - onemonth)/ oneday;
var eidHours = (diff % oneday) / onehour;
var eidMinutes = (diff % onehour) / oneminute;
var eidSeconds = (diff % oneminute) / onesecond;
var eidMSeconds = (diff % onesecond) / onesecond;

month.innerText=Math.floor(eidmonths);
day.innerText=Math.floor(eidDays);
hour.innerText=Math.floor(eidHours);
minute.innerText=Math.floor(eidMinutes);
second.innerText=Math.floor(eidSeconds);

if(years.innerText.length == 1){
	years.innerText = 0 + years.innerText;    
}
if(month.innerText.length == 1){
	month.innerText = 0 + month.innerText;    
}
if(day.innerText.length == 1){
	day.innerText = 0 + day.innerText;    
}
if(hour.innerText.length == 1){
	hour.innerText = 0 + hour.innerText;    
}
if(minute.innerText.length == 1){
	minute.innerText = 0 + minute.innerText;    
}
if(second.innerText.length == 1){
	second.innerText = 0 + second.innerText;    
}
// if(miliseconds.innerText.length == 1){
// 	miliseconds.innerText =  milisecond.innerText + 0;    
// }
},100);