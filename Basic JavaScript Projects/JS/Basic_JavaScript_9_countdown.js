function countdown() {
    var seconds = document.getElementById("seconds").value; //displays seconds

    function tick() {
        seconds = seconds - 1; //counts down by 1
        timer.innerHTML = seconds;
        if (seconds > 0) {

            setTimeout(tick, 1000); //stops the timer at 0 seconds
        }
        if (seconds == -1) {
            alert("Time's Up!"); //alerts the window "Time's up! when it reaches 0"

        }

    }
    tick(); //displays the count
}