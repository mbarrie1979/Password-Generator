// Assignment Code
console.log("Check Check 1 2 1 2")
var generateBtn = document.querySelector("#generate");

// initialization of variables for password 

var passcodeRequirements = {
  passwordLength: 8,
  includeUpperCase: false,
  includeLowerCase: false,
  includeNumeric: false,
  includeSpecial: false
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
