var X = 10;

function addLocal() { //Using a global & local variable
    var Y = 15;
    document.write(X + Y);
}

function addGlobal() { //Trying to use a local variable outside this function. Console error: Y is not defined
    document.write(Y + 10);
}

addLocal();
addGlobal();

function getDate() { //If statement 
    if (new Date().getHours() < 18) {
        document.getElementById("greet").innerHTML = "Have a great day!"
    }
}

function getAge() {
    var age = document.getElementById('age').value;
    if (age >= 18) { // If/else statement to determine voting ability
        Vote = "You can vote this year!";
    } else {
        Vote = "You are not quite old enough..";
    }
    document.getElementById("canVote").innerHTML = Vote;
}

function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) { // If/else if/else statment based on time of day
        reply = "Good Morning";
    } else if (time > 12 == time < 6) {
        reply = "Good Afternoon"
    } else {
        reply = "Good Evening"
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}