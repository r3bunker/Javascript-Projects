let activePlayer = "X"; //This variable keeps track of who's turn it is
let selectedSquares = []; //this array stores an array of moves. We use this to determine win condition

function placeXOrO(squareNumber) { // funciton for placing an x or o in a square
    //This condition ensures a square hasn't been selected already
    //The .some() method is used to check each element of selectedSquares array to
    //see if it contains the square number clicked on.
    if (!selectedSquares.some(Element => Element.includes(squareNumber))) { //This variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber); //This checks who's turn it is
        if (activePlayer === "X") { // if the active player is X, then the X.png is placed
            select.style.backgroundImage = "url('./images/newXSize.png')"; //grabs X image

        } else { //if active player is not X, then they are player O.
            select.style.backgroundImage = "url('./images/newOSize.png')"; //grabs O image
        }
        selectedSquares.push(squareNumber + activePlayer); //squareNumber and activePlayer are concatenated together and added to array
        checkWinConditions(); //Calls a function to check for any win condition
        if (activePlayer === "X") { //changes the active player
            activePlayer = "O";
        } else { //if active player is O change to X
            activePlayer = "X";
        }
        audio('./media/place.mp3'); // plays audio of a piece being placed
        if (activePlayer === "O") {
            disableClick(); //disables clicking for computer's turn
            setTimeout(function() { computerTurn(); }, 1000); //waits one second before placing computer's turn
        }
        return true; //returning true is needed to make the computer's turn to work

    }

    function computerTurn() { //random square being selected
        let success = false; // needed for our while loop
        let pickASquare; //stores a random number 0-9
        while (!success) { //allows while loop to keep trying if square is selected.
            pickASquare = String(Math.floor(Math.random() * 9)); // randomly selects a number between 0-9
            if (placeXOrO(pickASquare)) { //if random number evaluates to true, the square hasn't been selected yet
                placeXOrO(pickASquare); //calls the function
                success = true; //ends the loop

            };

        }
    }
}

function checkWinConditions() { //parses the selectedSquares array to search for a win condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); } //X 0,1,2 win
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); } //X 3,4,5 win
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); } //X 6,7,8 win
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); } //X 0,3,6 win
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); } //X 1,4,7 win
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); } //X 2,5,8 win
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); } //X 6,4,2 win
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); } //X 0,4,8 win
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); } //O 0,1,2 win
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); } //O 3,4,5 win
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); } //O 6,7,8 win
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); } //O 0,3,6 win
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); } //O 1,4,7 win
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); } //O 2,5,8 win
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); } //O 6,4,2 win
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); } //O 0,4,8 win
    else if (selectedSquares.length >= 9) { // checks for tie
        audio('./media/tie.mp3'); // plays tie audio
        setTimeout(function() { resetGame(); }, 1000); //sets a 3 sec timer before it resets the game.
    }

    function arrayIncludes(squareA, squareB, squareC) { //checks if array includes 3 strings. checks each win condition.
        const a = selectedSquares.includes(squareA); //check for 3 in a row.
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; } // if all 3 variables are in the array, true is returned.
    }


}

function disableClick() { //makes body element temporarily unclickable
    body.style.pointerEvents = 'none'; //makes it unclickable
    setTimeout(function() { body.style.pointerEvents = 'auto'; }, 1000); //makes it clickable again after 1 second
}

function audio(audioURL) { //takes string parameter for placement sound
    let audio = new Audio(audioURL); //create a new audio object and we pass the path as a parameter
    audio.play(); //play method plays our audio
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //utilizes html canvas to draw lines
    const canvas = document.getElementById('win-lines'); //line accesses our html canvas element
    const c = canvas.getContext('2d'); //gives us access to methods and properties to use on canvas
    let x1 = coordX1, //indicates where the x and y axis are to start lines
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1, //stores temporary x axis data
        y = y1; //stores temporary y axis data
    function animateLineDrawing() { //interacts with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing); // creates the loop for when the game ends it restarts
        c.clearRect(0, 0, 608, 608); // clears contents of rectangle 
        c.beginPath(); //starts new path
        c.moveTo(x1, y1); //moves us to a starting point for our line
        c.lineTo(x, y); //indicates the end point of our line
        c.lineWidth = 10; //set width our our line
        c.strokeStyle = 'rgba(70,255,33,.8)'; //sets color of our line
        c.stroke(); // draws everything we laid out
        if (x1 <= x2 && y1 <= y2) { //checks if we have reached the end point
            if (x < x2) { x += 10; } // adds 10 to previous end x point
            if (y < y2) { y += 10; } //adds to to previous end y point
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //cancels our animation loop if reach the end points
        }
        if (x1 <= x2 && y1 >= y2) { //this is similar to above. it was necessary for the 6,4,2 win condition
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }

    }

    function clear() { //clears our canvas after our win line is drawn
        const animationLoop = requestAnimationFrame(clear); //starts our animation loop
        c.clearRect(0, 0, 608, 608); //clears canvas
        cancelAnimationFrame(animationLoop); //stops our animation loop
    }
    disableClick(); //line disallows clicking while the win sound is playing
    audio('./media/winGame.mp3'); //plays win sounds
    animateLineDrawing(); //this line calls our main animation loop
    setTimeout(function() {
        clear();
        resetGame();
    }, 1000); // this line waits 1 second, then clears canvas, resets game and allows clicking again

}

function resetGame() { //resets game in a tie or win
    for (let i = 0; i < 9; i++) { //loop iterates through each HTML square element
        let square = document.getElementById(String(i)); //variable gets the HTML element of i
        square.style.backgroundImage = ""; //this removes our element backgroundImage
    }
    selectedSquares = []; //resets our array so it is empty and we can start over
}