function validateForm(){
    var x = document.forms["myForm"]["fName"]["pNumber"].value;
    if (x == ''){
        alert("You need to fill out the empty field");
        return false;
    }
}

function openForm(){
    document.getElementById("myForm").style.display = 'block';
}

function closeForm(){
    document.getElementById("myForm").style.display = 'none';
}