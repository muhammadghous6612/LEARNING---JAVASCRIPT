// var cities=['karachi','lahore','faisalabad'];
// document.write(`<h3>${cities[2]}</h3>`);
// document.write(`<h3>${cities[1]}</h3>`);
// document.write(`<h3>${cities[0]}</h3>`);
// document.write(`<h3>${cities[2]}</h3>`);

// var food=["MANGO","ORANGE","APPLE","EGG"]

// document.write(food);

// food.splice(4,0, "WATERMILAN");
// document.writec

// food.slice(1,2,)
// document.write(food);


// SLICE COPY KARNY K KAM AATA HY ,OR JO COPY KARTA HY US KA ARRRY BANA K RETURN KARDY GA.
// SLICE K 2 PARAMETERS HE.
// 1-->KAHAN SE COPY KRNA HY START KARNA HY.
// 2--> JAHAN TK COPY KRNA HE US SE AIK  NUMBER ZYEADA DATY H.

// var copy= food.slice(1,4);
// document.write("copy using slice-->",copy);

// COPY ALL ELEMENTS AFTER INDEX NUMBER  

// var copy1=food.slice(0);
document.write("copy using slice-->",copy1);


var bonds=[2133,1233,3443];
var bondNumber=prompt('ENTER YOU BOND NUMBER');
var won=false;
for(var i=0;i<bonds.length;i++){
    if(bondNumber==bonds[i]){
        won=true;
        break;
    }
}
if(won){
    document.write('YOU WON');
}
else{
    document.write('YOU LOSE');
}

var bonds=[211,122,231,341]
var bondNumber=prompt('ENTER YOUR BOND NUMBER');
var won =false;
for(i=0;i<bonds.length;i++){
    if(bondNumber==bonds[i])
    {
    won=true;
break;}
}
if(won){
    document.write('you won');
}
else{
    document.write('you lose');
}
var tableNumber=+prompt('enter your number')
for(i=1;i<=10;i++){
document.write(`<h1>${tableNumber +'x'+ i +'='+ i*tableNumber + '<br>'}</h1>`);
}