function addition() {
    var add = (2 + 2);
    document.getElementById("add").innerHTML = `2 + 2 = ${add}`;
}

function subtraction() {
    var sub = (5 - 2);
    document.getElementById("sub").innerHTML = `5 - 2 = ${sub}`;
}

function multiplication() {
    var multiply = (6 * 8);
    document.getElementById("multiply").innerHTML = `6 * 8 = ${multiply}`;
}

function division() {
    var divide = (48 / 6);
    document.getElementById("divide").innerHTML = `48 / 6 = ${divide}`;
}

function moreMath() {
    var simpleMath = (48 / 6) * 10 + 5;
    document.getElementById("execute").innerHTML = `(48 / 6) * 10 + 5 = ${simpleMath}`;
}

function modulus() {
    var remainder = 25 % 6;
    document.getElementById("remainder").innerHTML = `25 / 6 leaves a remainder of ${remainder}`;
}

function negativeOperator() {
    var X = 10;
    document.getElementById("negative").innerHTML = -X;
}

function increment() {
    var X = 5;
    X++;
    document.getElementById("increment").innerHTML = `5 incrementing = ${X}`;
}

function decrement() {
    var X = 5;
    X--;
    document.getElementById("decrement").innerHTML = `5 decrementing = ${X}`;
}

var ranNum = Math.random() * 100;
window.alert(ranNum);
document.write("Window.alert's random number rounded = " + Math.round(ranNum));