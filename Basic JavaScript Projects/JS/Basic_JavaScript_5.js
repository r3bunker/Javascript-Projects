document.write(typeof true); //boolean

function myFunction() {
    document.getElementById("test").innerHTML = 0 / 0; //Displays NaN
}

function myTrueFunction() {
    document.getElementById("true").innerHTML = isNaN("This is true"); //true
}

function myFalseFunction() {
    document.getElementById("false").innerHTML = isNaN("7"); //false
}

function infinity() {
    document.getElementById("infinity").innerHTML = 2E310; //infinity
}

function neginfinity() {
    document.getElementById("neginfinity").innerHTML = -2E310; //-infinity
}
document.write(10 > 2); //true
document.write(10 < 2); //false
document.write("20" + 8); //208
document.write(3 == 3); //true
document.write(1 == 3); //false
var X = 3;
var Y = 3;
var Z = "5";
var A = "3";
document.write(X === Y); //return true by ensuring to match data type and value.
document.write(X === Z); //return false by writing a different data type and different value.
document.write(X === A); //return false by writing a different data type bu the same value.
document.write(Z === A); //return false by writing the same date type but a different value for both.

console.log(2 + 2); //displays '4' in console.
console.log(15 < 10); //displays 'false' in console.

document.write(10 < 20) && (5 > 3); //true
document.write(10 > 30) && (5 > 3); //false
document.write(10 > 3) || (10 < 3); //true

function notTrueFunction() {
    document.getElementById("notTrue").innerHTML = !(10 < 20); // Displays false
}

function notFalseFunction() {
    document.getElementById("notFalse").innerHTML = !(10 > 20); //Displays true
}