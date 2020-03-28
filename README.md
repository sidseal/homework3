original JS code
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generate() {
    myform.row_password.value = randomPassword(myform.length.value);
}


// Variables//
var ucLength = prompt("How many characters would you want your password to be? Choose number between 8-128!");
var specCh = confirm("Would you like to use special characters?");
var uPLet = confirm("Use uppercase letters?");
var lowCase = confirm("Use lowercase letters?");


function createPW(){
var numCh = ucLength;
var values = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&");

for(var i=0; i=ucLength; i++){
  password = password + values.charAt(Math.floor(Math.random()* Math.floor.values.length-1));
}
}

function generatePassword()