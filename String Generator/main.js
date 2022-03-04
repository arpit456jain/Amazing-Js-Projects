// variables initialized
//1. targeting elements
let length = document.getElementById("length");
let type = document.getElementById("type");
let submitValue = document.getElementById("submitValue");
let generateString = document.getElementsByClassName("generatedString")[0];
//  2.Other Variables
let lengthInput;
let typeInput;

// function to generate random string 
function randomString(stringLength) {
    //define a variable consisting alphabets in small and capital letter  
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let randomstring = "";
    //loop to select a new character in each iteration  
    for (var i = 0; i < stringLength; i++) {
        var rnum = Math.floor(Math.random() * characters.length);
        randomstring += characters.substring(rnum, rnum + 1);
    }

    //display the generated string   
    generateString.innerHTML = randomstring;
}

// function to generate a AlphaNumericString 
function randomStringAlpha(stringLength) {
    //initialize a variable having alpha-numeric characters  
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    //specify the length for the new string to be generated  

    let randomstring = "";

    //put a loop to select a character randomly in each iteration  
    for (var i = 0; i < stringLength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    //display the generated string   
    generateString.innerHTML = randomstring;
}
submitValue.addEventListener("click", (e) => {
    e.preventDefault();
    lengthInput = length.value;
    typeInput = type.value;
    if (typeInput == "RandomString") {
        randomString(lengthInput);
    } else {
        randomStringAlpha(lengthInput);
    }


})