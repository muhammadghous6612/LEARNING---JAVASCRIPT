var user_number=document.getElementById('user_number')
var rendom_number=document.getElementById('rendom_number')
var result=document.getElementById('result')
var info_box_result=document.getElementById('info_box_result')
var win=document.getElementById('win')
var loss=document.getElementById('loss')
var total=document.getElementById('total')
var msg=document.getElementById('msg')


var count=10
var win=0
var loss=0

function tryMYLuck(user_number){
var rendom_number=Math.rendom()*6;
var ceil=Math.ceil(rendom_number);
user_number.innerText=user_number;
total.innerText= --count;
 
if(ceil === user_number){
  result.innerText="YOU WON";
  info_box_result.style.backgroundColor = "GREEN";
  result.style.color="White";
  win_html.innerText =++win;

}else{
  result.innertext ="you LOSS";
  info_box_result.style.backgroundcolor="red";
  result.style.color="white";
  loss_html.innertext =++loss;

}
checkResult();

}
function checkResult(){
if (count==0){
  if(win>=3) 
}
}