"use strict"

var skaicius1 = 1;
var skaicius2 = 2;
var skaicius3 = 3;
var skaicius4 = 4;
var suma = 0;
var sandauga = 0;


suma = (skaicius4 + skaicius3 + skaicius2 + skaicius4);
sandauga = (skaicius4 * skaicius3 * skaicius2 * skaicius4);

console.log(skaicius4, skaicius3, skaicius2, skaicius1);
console.log(suma);
console.log(sandauga);


var x  = skaicius1;
skaicius1 = skaicius2;
skaicius2 = x;
console.log(skaicius1);
console.log(skaicius2);
skaicius3 = skaicius3 + skaicius4;
skaicius4 = skaicius3 - skaicius4;
skaicius3 = skaicius3 - skaicius4;

console.log(skaicius3);
console.log(skaicius4);

//alert(skaicius1 + ", " + skaicius2 + ", " + skaicius3 + ", " + skaicius4);


var maxSkaicius = Number.MAX_VALUE;
console.log(maxSkaicius);



//1. Susikurti kintamuosius: skaicius5, skaicius6.
//2. Sukeisti kinamųju reikšmes skaicius5 ir skaicius6 pasitelkiant XOR operatorių.
//3. Rezultatą patalpinti į HTML dokumento div žymėje, kurios id="Rezultatas".

var skaicius5 = 5;
var skaicius6 = 6;
