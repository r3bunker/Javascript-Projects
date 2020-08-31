function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        if (seconds > 0) {

            setTimeout(tick, 1000);
        }
        if (seconds == 0) {
            alert("Time's Up!");

        }

    }
    tick();
}