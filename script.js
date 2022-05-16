// Assignment Code
var generateBtn = document.querySelector("#generate");

//define password length
var passlength = { 
  minLength: 8, maxLength: 128
}

//key arrays
var keySets = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!@#$%^&*()_-+=?{}[];:"

}

//function to generate
var generatePassword = function() {
  var length = window.prompt("What lenght should the password be?\n Enter a number of digits between " +
    passlength.minLength + "-" + passlength.maxLength + ".");
  if (length === null)
    return "";
}

//generate password with correct length
var getPassword = function(max, min) {
  return Math.floor(Math.password() * (max- min) + min);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
