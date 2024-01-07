// Assignment Code
console.log("Check Check 1 2 1 2")
var generateBtn = document.querySelector("#generate");

// initialization of variables for password 
var regexpCheckIfNumbers = /^\d+$/;

var lengthCheck = false;
var lettersCheck = false;

var passcodeRequirements = {
  passwordLength: 8,
  includeLetters: false,
  includeNumbers: false,
  includeSpecial: false
}


while (!lengthCheck) {
  var userPromptLength = prompt("Enter the desired password length (from 8 - 12 characters)");

  if (!userPromptLength) {
    alert("User cancelled");
    passcodeRequirements.passwordLength = 8;
  } else if (!userPromptLength.match(regexpCheckIfNumbers)) {
    alert("You must enter a numeric value from 8 - 12");
  } else {
    var parsedLength = parseInt(userPromptLength);
    if (parsedLength < 8 || parsedLength > 12) {
      alert("You must enter a value from 8 - 12");
    } else {
      passcodeRequirements.passwordLength = parsedLength;
      console.log(passcodeRequirements)
      lengthCheck = true;

    }
  }
};

while (!lettersCheck) {
  var userLetters = prompt("Would you like to include letters? (Y or N)");
  if (!userLetters) {
    alert("User cancelled, default of YES will be used");
    passcodeRequirements.includeLetters = true;
    console.log(passcodeRequirements)
    lettersCheck = true;
  } else {
    if (userLetters.trim()[0].toUpperCase() === "Y") {
      passcodeRequirements.includeLetters = true;
      console.log(passcodeRequirements)
      lettersCheck = true;
    } else if (userLetters.trim()[0].toUpperCase() === "N") {
      passcodeRequirements.includeLetters = false;
      console.log(passcodeRequirements)
      lettersCheck = true;
    } else {
      alert("Please enter Y or N")
      lettersCheck = false;
    }
  }
}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
