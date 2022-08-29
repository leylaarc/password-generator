
// function to get a random number

var randomNumber = function(min, max) {

    if (!max) {
        max=min
        min=0
    }
    var randomValue = Math.random();
    return Math.floor(min * (1 - randomValue) + randomValue * max);

};

function getRandom(list) {
    return list[randomNumber(list.length)];
};


// arrays

var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialArray = ["!","@","#","$","%","&","*"];
var numberArray = ["0","1","2","3","4","5","6","7","8","9"];

// generate password function
function generatePassword () {
var masterArray = []


// function to ask length of password
var getLength = window.prompt("How many characters would you like your passcode to contain? Please enter a number between 8 and 128!")
console.log(getLength);

if (getLength < 8 || getLength > 128 || getLength === "" || getLength === null) {
    window.alert("You need to choose a number between 8 and 128. Please try again.");
    // use return to call it again and stop the rest of this function from running
    return generatePassword();
}

// function to ask if they want lowercase letters
    var getLowercase = window.confirm('Would you like to use lowercase letters in your passcode?');

    if (getLowercase === true) {
        masterArray.push(lowercaseArray);
    };

// function to ask if they want uppercase letters
    var getUppercase = window.confirm('Would you like to use uppercase letters in your passcode?');

    if (getUppercase === true) {
        masterArray.push(uppercaseArray);
    };

// function to ask if they want to use special characters
    var getSpecial = window.confirm('Would you like to use special characters in your passcode?');
    if (getSpecial === true) {
        masterArray.push(specialArray);
    };

// function to ask if they want to use numbers
    var getNumbers = window.confirm('Would you like to use numbers in your passcode?');

    if (getNumbers === true) {
        masterArray.push(numberArray);
    };


    // if no character list is selected

    if (masterArray.length === 0) {
        masterArray.push(specialArray)
    }
    var generatedPassword = ""

    for (var i = 0; i < getLength; i++) {
        var randomList = getRandom(masterArray);
        var randomChar = getRandom(randomList);
        generatedPassword += randomChar
    }

    return generatedPassword

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




Footer
