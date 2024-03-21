var cities=['karachi','lahore','faisalabad'];
document.write(`<h3>${cities[2]}</h3>`);
document.write(`<h3>${cities[1]}</h3>`);
document.write(`<h3>${cities[0]}</h3>`);
document.write(`<h3>${cities[2]}</h3>`);

var food=["MANGO","ORANGE","APPLE","EGG"]

document.write(food);

food.splice(1,0, "WATERMILAN");
document.write(food);

food.slice(1,0,"EGG","AA")
document.write

// SLICE COPY KARNY K KAM AATA HY ,OR JO COPY KARTA HY US KA ARRRY BANA K RETURN KARDY GA.
// SLICE K 2 PARAMETERS HE.
// 1-->KAHAN SE COPY KRNA HY START KARNA HY.
// 2--> JAHAN TK COPY KRNA HE US SE AIK  NUMBER ZYEADA DATY H.

var copy= food.slice(1,2);
document.write("copy using slice-->",copy);

// COPY ALL ELEMENTS AFTER INDEX NUMBER  

var copy1=food.slice(0);
document.write("copy using slice-->",copy1);


