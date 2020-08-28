function fullSentence() {
    var part1 = "This sentence ";
    var part2 = "is broken ";
    var part3 = "into four ";
    var part4 = "different parts.";
    var wholeSentence = part1.concat(part2, part3, part4); //This combines all 4 parts into one string
    document.getElementById("sentence").innerHTML = wholeSentence; //Displays the whole sentence in browser
}

function sliceMethod() {
    var sentence = "All work and no play makes Johnny a dull boy";
    var section = sentence.slice(27, 33); //splices the sentence. (# of places to deleted,display until # shown)
    document.getElementById("slice").innerHTML = section; //displays Johnny in browser
}

function mySlice() {
    var sentence = "This is a sentence that I am going to splice";
    var sectionSlice = sentence.slice(10, 18); //splices sentence. (Deletes the first 10 places, displays the next places until 'place' 18)
    var res = sectionSlice.toUpperCase();
    var n = sentence.search("splice"); //search determines the position of a value in the string.
    document.getElementById("sliceDemo").innerHTML = res + n; //displays SENTENCE38. SENTENCE due toUpperCase, 38 to search.
}

function myString() {
    var X = 42;
    document.getElementById("string").innerHTML = X.toString(); //displays 42 as a string.
}

function myPrecision() {
    var Y = 1345.594948594839;
    var fixed = Y.toFixed(3); //changes Y to only show 3 decimal places
    document.getElementById("precision").innerHTML = Y.toPrecision(10); //displays Y as 10 digits
    document.getElementById("fixedDigits").innerHTML = fixed; //also displays Y with 3 decimal places
}

function myValue() {
    var str = "Hello, World!"
    var value = str.valueOf(); //primitive value
    document.getElementById("value").innerHTML = value; //displays primitive value
}