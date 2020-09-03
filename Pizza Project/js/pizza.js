function getReceipt() {
    var text1 = "<h3>You Order:</h3>"; //this intializes our string so it can pass from function to function, growing line by line into a full receipt
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6; //sets price to 6
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8; //sets price to 8
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10; //sets price to 10
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14; //sets price to 14
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16; //sets price to 16
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1); //passed on to each function
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); //stores the value in toppingArray
            console.log("selected topping item: (" + toppingArray[j].value + ")"); //displays toppingArray values
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping-1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1; //displays order
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"; //displays total price
};