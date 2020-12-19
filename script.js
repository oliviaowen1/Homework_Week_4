// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLower = 'abcdefghijklmnopqrstuvwxyz';
var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';

function writePassword() {
  // Asking how many characters the password should be //
  var pwdLength = prompt("How long would you like your password to be? It can be between 8 - 128 characters");
    // Alert if the password is too short or too long //
  while(pwdLength < 8 || pwdLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    var pwdLength = prompt("How long would you like your password to be? It can be between 8 - 128 characters");
  }
  //  Allows the other questions to be asked if it within the right amount of characters //
  if (pwdLength >= 8 && pwdLength <= 128) {
    var pwdLowercase = confirm("Would you like lowercase letters in your password?");
    var pwdUppercase = confirm("Would you like uppercase letters in your password?");
    var pwdNumbers = confirm("Would you like numbers in your password?");
    var pwdSymbol = confirm("Would you like special characters in your password?");
  }
  // Alerts the user if no character types have been selected //
  while(pwdLowercase === false && pwdUppercase === false && pwdNumbers === false && pwdSymbol === false) {
    alert("You must choose at least one character");
    var pwdLowercase = confirm("Would you like lowercase letters in your password?");
    var pwdUppercase = confirm("Would you like uppercase letters in your password?");
    var pwdNumbers = confirm("Would you like numbers in your password?");
    var pwdSymbol = confirm("Would you like special characters in your password?"); 


// Lowercase question answer //
    if (pwdLowercase == true) {
      for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * charLower.length));
      }
    }
    return pwd;

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
}
