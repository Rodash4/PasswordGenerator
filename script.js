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

//function to generate questions
var generatePassword = function() {
  var length = window.prompt("What lenght should the password be?\n Enter a number of digits between " +
    passlength.minLength + "-" + passlength.maxLength + ".");

  var lowercase = window.prompt("Do you want to use lower case characters?\n Enter yes or no");

  var uppercase = window.prompt("Do you want to use upper case characters?\n Enter yes or no");

  var numberkeys = window.prompt("Do you want to use number characters?\n Enter yes or no")

  var specialkeys = window.prompt("Do you want to use special characters?\n Enter yes or no")
  return;
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
