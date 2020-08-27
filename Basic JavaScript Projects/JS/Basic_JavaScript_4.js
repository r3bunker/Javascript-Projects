function myDictionary() {
    var Animal = {
        Species: "Tiger",
        Color: "Orange",
        Breed: "Bengal",
        Sound: "Growl",
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}