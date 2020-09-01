function callLoop() {
    var digit = "";
    var X = 1;
    var n = digit.length;
    while (X < 11) { //from 0 - 10 this while loop will continue
        digit += "<br>" + X; //adds 1 to digit each time through the loop and adds a line break
        X++; //adds 1 to X
    }
    document.getElementById("loop").innerHTML = digit; //displays all 10 numbers in the loop
    document.getElementById("string").innerHTML = n; //displays the string number
}

var instruments = ["Guitar", "Drums", "Piano", "Base"]; //defines the array
var list = "";
var Y;

function forLoop() {
    for (Y = 0; Y < instruments.length; Y++) { //sets condition for the for loop
        list += instruments[Y] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML = list; //displays list of instruments
}

function arrayFunction() {
    var dogPics = [];
    dogPics[0] = "eating"; //sets the index of the array element 
    dogPics[1] = "running"; //sets the index of the array element
    dogPics[2] = "jumping"; //sets the index of the array element
    document.getElementById("array").innerHTML = `The dog is ${dogPics[2]}!`; //displays the value of index[2]
}

function constantFunction() {
    const golfClub = { type: "Driver", brand: "Taylormade", distance: "300 yards", price: "$500" }; //utilizes const 
    golfClub.brand = "Callaway"; //changes brand
    golfClub.distance = "350 yards"; //changes distance
    document.getElementById("constant").innerHTML = `The new ${golfClub.brand} driver travels ${golfClub.distance}! But it costs ${golfClub.price}...`; //displays the completed string

}

var X = 25;
document.write(X); { //displays 25 from above var X
    let X = 28; //utlizes let
    document.write("<br>" + X); //displays 28 only here because of the use of let in the block.
}
document.write("<br>" + X); //displays 25 from above var X

function myFunction(name) {
    return "Welcome, " + name;
}
document.getElementById("greeting").innerHTML = myFunction("Ryan"); //Displays "Welcome, Ryan"

let car = { //defines an object
    make: "Volkwagen ",
    model: "Jetta ",
    year: "2002 ",
    color: "black ",
    description: function() { //method
        return `This car is a ${car.year} ${car.color} ${car.make} ${car.model} `;
    }
};
document.getElementById("car").innerHTML = car.description(); //displays the return complete string

var num = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 2) { break; } //stops the loop at 2.
    num += `The number is ${i} <br>`;
}
document.getElementById("break").innerHTML = num; //displays only number 0 and 1

var numCont = "";
var j;
for (j = 0; j < 10; j++) {
    if (j === 2) { continue; } //continues (skips) over 2
    numCont += `The number is ${j} <br>`;
}
document.getElementById("continue").innerHTML = numCont; //displays numbers 0-10 while skipping 2