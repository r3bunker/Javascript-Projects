var slideIndex = 1;
showSlides(slideIndex); //sets display slide to 1

function plusSlides(n) {
    showSlides(slideIndex += n); //adds slides one after another
}

function currentSlide(n) {
    showSlides(slideIndex = n); //sets the current slide to slideIndex, making the slideIndex = currentSlides
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 } //resets slideIndex to 1
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //hides the other slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //displays 3 dots
    }
    slides[slideIndex - 1].style.display = "block"; //displays one image/slide at a time
    dots[slideIndex - 1].className += " active"; //dots at the bottom are always active
}