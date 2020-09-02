function validateForm() {
    var x = document.forms["myForm"]["fName"]["lName"]["age"].value;
    if (x == null || x == "") {
        alert("You must fill out the form");
        return false;
    }
}