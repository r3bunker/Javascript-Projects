function rideFunction() { //determines if the person can ride or not.
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short" : "You are tall enough"; //ternary operator
    document.getElementById("Ride").innerHTML = canRide + " to ride.";
}

function voteFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are not old enough" : "You are old enough"; //ternary operator
    document.getElementById("Vote").innerHTML = canVote + " to vote!"
}

function alcoholFunction() {
    var age, canDrink;
    age = document.getElementById("age").value;
    canDrink = (age < 21) ? "You are not old enough" : "You are old enough"; //ternary operator
    document.getElementById("drink").innerHTML = canDrink + " to drink!"
}

function Vehicle(Make, Model, Year, Color) { //this keyword
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year; //ouputs a statement from the this/new keywords function.
}

var number = 12;
document.write(number);

function footballPlayer(Height, Weight, Age, Position) {
    this.footballPlayerHeight = Height;
    this.footballPlayerWeight = Weight;
    this.footballPlayerAge = Age;
    this.footballPlayerPosition = Position;
}

var Dawkins = new footballPlayer("5'10\"", "215lbs", "28", "Free Safety");

function myPlayer() {
    document.getElementById("stats").innerHTML = "Dawkins is " + Dawkins.footballPlayerAge + ". He plays " + Dawkins.footballPlayerPosition + " at " + Dawkins.footballPlayerHeight + " and " + Dawkins.footballPlayerWeight + ".";
}

function subtractFunction() {
    document.getElementById("nested").innerHTML = subtract();

    function subtract() {
        var startingPoint = 10;

        function minusOne() { startingPoint -= 1; } //nested function
        minusOne();
        return startingPoint;
    }
}