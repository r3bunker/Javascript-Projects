function golfChoice() {
    var choiceOutput;
    var brand = document.getElementById("choice").value;
    var golfString = " is a great brand!"
    switch (brand) {
        case "Callaway":
            choiceOutput = "Callaway" + golfString;
            break;
        case "Taylormade":
            choiceOutput = "Taylormade" + golfString;
            break;
        case "Ping":
            choiceOutput = "Ping" + golfString;
            break;
        case "Cobra":
            choiceOutput = "Cobra" + golfString;
            break;
        case "Mizuno":
            choiceOutput = "Mizuno" + golfString;
            break;
        default:
            choiceOutput = "Please enter a brand from list above.";

    }
    document.getElementById("output").innerHTML = choiceOutput;
}

function classFunction() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "It changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 300, 0);
ctx.font = "30px Arial";
ctx.fillText("JavaScript Drawing", 125, 50);
ctx.textAlign = "center";
grd.addColorStop(0, "black");
grd.addColorStop(.5, "blue");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(100, 100, 500, 350);