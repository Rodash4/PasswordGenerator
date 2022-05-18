//key arrays
var keySets = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!@#$%^&*()_-+=?{}[];:"

}

//define password length
var passLength = { 
  minLength: 8, maxLength: 128
}

//generate password with correct length
var getPassword = function(max, min) {
  return Math.floor(Math.password() * (max- min) + min);
}



//function to generate questions
var generatePassword = function() {
  var length = window.prompt("What lenght should the password be?\n Enter a number of digits between " +
    passLength.minLength + "-" + passLength.maxLength + ".");

  var lowercase = window.prompt("Do you want to use lower case characters?\n Enter yes or no");

  var uppercase = window.prompt("Do you want to use upper case characters?\n Enter yes or no");

  var numberKeys = window.prompt("Do you want to use number characters?\n Enter yes or no")

  var specialKeys = window.prompt("Do you want to use special characters?\n Enter yes or no")
}

//generate password with arrays
var password = "";
var i = 0;
while (i < length){
if (lowercase === "yes") {
   var passwordIndex = getPassword(0, keySets.lower.length -1);
   var keys = keySets.lower[passwordIndex];
   password = password + keys;
   i++;
   if (i >= length )
    break;
}
  if (uppercase === "yes") {
    var passwordIndex = getPassword(0, keySets.upper.length -1);
    var keys = keySets.upper[passwordIndex];
    password = password + keys;
    i++;
    if (i >= length )
      break;
}
   if (numberKeys === "yes") {
    var passwordIndex = getPassword(0, keySets.numberKeys.length -1);
    var keys = keySets.numberKeys[passwordIndex];
    password = password + keys;
    i++;
    if (i >= length )
     break;
}
   if (specialKeys === "yes") {
    var passwordIndex = getPassword(0, keySets.specialKeys.length -1);
    var keys = keySets.specialKeys[passwordIndex];
    password = password + keys;
    i++;
    if (i >= length )
      break;
   }
}


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
