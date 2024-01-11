// Assignment Code
console.log("Check Check 1 2 1 2")
var generateBtn = document.querySelector("#generate");

// initialization of variables for password 
var regexpCheckIfNumbers = /^\d+$/;

var lengthCheck = false;
var upperLettersCheck = false;
var lowerLettersCheck = false;
var numbersCheck = false;
var specialCheck = false;
var questionsAnswered = false;

// object storing user selections
var passcodeRequirements = {
  passwordLength: 8,
  includeLowerCaseLetters: false,
  includeUpperCaseLetters: false,
  includeNumbers: false,
  includeSpecial: false,
}



// User Enters in Desired length of password 8-12 characters
function passCodeQuestions() {
  while (!lengthCheck) {
    var userPromptLength = prompt("Enter the desired password length (from 8 - 128 characters)");

    if (!userPromptLength) {
      alert("User cancelled, will use default value of 8");
      passcodeRequirements.passwordLength = 8;
      console.log(passcodeRequirements)
      break;
    } else if (!userPromptLength.match(regexpCheckIfNumbers)) {
      alert("You must enter a numeric value from 8 - 128");
    } else {
      var parsedLength = parseInt(userPromptLength);
      if (parsedLength < 8 || parsedLength > 128) {
        alert("You must enter a value from 8 - 128");
      } else {
        passcodeRequirements.passwordLength = parsedLength;
        console.log(passcodeRequirements)
        lengthCheck = true;

      }
    }
  };

  // User enters in whether they want lower case letters included in the password (Y or N)
  while (!lowerLettersCheck) {
    var userLowerLetters = prompt("Would you like to include lower case letters? (Y or N)");
    if (!userLowerLetters) {
      alert("User cancelled, default of YES will be used");
      passcodeRequirements.includeLowerCaseLetters = true;
      console.log(passcodeRequirements)
      lowerLettersCheck = true;
      break;
    } else {
      if (userLowerLetters.length === 1 && (userLowerLetters.trim()[0].toUpperCase() === "Y" || userLowerLetters.trim()[0].toUpperCase() === "N")) {
        if (userLowerLetters.trim()[0].toUpperCase() === "Y") {
          passcodeRequirements.includeLowerCaseLetters = true;
          console.log(passcodeRequirements)
          lowerLettersCheck = true;
        } else if (userLowerLetters.trim()[0].toUpperCase() === "N") {
          passcodeRequirements.includeLowerCaseLetters = false;
          console.log(passcodeRequirements)
          lowerLettersCheck = true;
        }
      } else {
        alert("Please enter a single letter: Y or N")
        lowerLettersCheck = false;
      }
    }
  };
  // User enters in whether they want upper case letters included in the password (Y or N)
  while (!upperLettersCheck) {
    var userUpperLetters = prompt("Would you like to include upper case letters? (Y or N)");
    if (!userUpperLetters) {
      alert("User cancelled, default of YES will be used");
      passcodeRequirements.includeUpperCaseLetters = true;
      console.log(passcodeRequirements)
      upperLettersCheck = true;
      break;
    } else {
      if (userUpperLetters.length === 1 && (userUpperLetters.trim()[0].toUpperCase() === "Y" || userUpperLetters.trim()[0].toUpperCase() === "N")) {
        if (userUpperLetters.trim()[0].toUpperCase() === "Y") {
          passcodeRequirements.includeUpperCaseLetters = true;
          console.log(passcodeRequirements)
          upperLettersCheck = true;
        } else if (userUpperLetters.trim()[0].toUpperCase() === "N") {
          passcodeRequirements.includeUpperCaseLetters = false;
          console.log(passcodeRequirements)
          upperLettersCheck = true;
        }
      } else {
        alert("Please enter a single letter: Y or N")
        upperLettersCheck = false;
      }
    }
  };

  // User enters in whether they want numbers included in the password (Y or N)
  while (!numbersCheck) {
    var userNumbers = prompt("Would you like to include numbers? (Y or N)");
    if (!userNumbers) {
      alert("User cancelled, default of YES will be used");
      passcodeRequirements.includeNumbers = true;
      console.log(passcodeRequirements)
      numbersCheck = true;
      break;
    } else {
      if (userNumbers.length === 1 && (userNumbers.trim()[0].toUpperCase() === "Y" || userNumbers.trim()[0].toUpperCase() === "N")) {
        if (userNumbers.trim()[0].toUpperCase() === "Y") {
          passcodeRequirements.includeNumbers = true;
          console.log(passcodeRequirements)
          numbersCheck = true;
        } else if (userNumbers.trim()[0].toUpperCase() === "N") {
          passcodeRequirements.includeNumbers = false;
          console.log(passcodeRequirements)
          numbersCheck = true;
        }
      } else {
        alert("Please enter a single letter: Y or N")
        numbersCheck = false;
      }
    }
  };
  // User enters in whether they want special characters included in the password (Y or N)
  while (!specialCheck) {
    var userSpecial = prompt("Would you like to include special characters? (Y or N)");
    if (!userSpecial) {
      alert("User cancelled, default of YES will be used");
      passcodeRequirements.includeSpecial = true;
      console.log(passcodeRequirements);
      specialCheck = true;
      break;
    } else {
      if (userSpecial.length === 1 && (userSpecial.trim()[0].toUpperCase() === "Y" || userSpecial.trim()[0].toUpperCase() === "N")) {
        if (userSpecial.trim().toUpperCase()[0] === "Y") {
          passcodeRequirements.includeSpecial = true;
          console.log(passcodeRequirements)
          specialCheck = true;
        } else if (userSpecial.trim()[0].toUpperCase() === "N") {
          passcodeRequirements.includeSpecial = false;
          console.log(passcodeRequirements)
          specialCheck = true;
        }
      } else {
        alert("Please enter a single letter: Y or N")
        specialCheck = false;
      }
    }
  };
  // if No has been selected for every catagory
  if (!passcodeRequirements.includeLowerCaseLetters && !passcodeRequirements.includeUpperCaseLetters && !passcodeRequirements.includeNumbers && !passcodeRequirements.includeSpecial) {
    alert("You must select at least one category (letters, numbers, or special characters).");
    // Reset checks and call the function again
    lengthCheck = false;
    upperLettersCheck = false;
    lowerLettersCheck = false;
    numbersCheck = false;
    specialCheck = false;
    passCodeQuestions();
  } else {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    lengthCheck = false;
    upperLettersCheck = false;
    lowerLettersCheck = false;
    numbersCheck = false;
    specialCheck = false;
  }
};




var lowerCaseLetters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
var upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());
var numberArray = [...Array(10)].map((_, i) => i);
var specialCharacters = [...Array(15)].map((_, i) => String.fromCharCode(i + 33));


// Fish Yates shuffle function
var shuffle = (input) => {
  for (var i = input.length - 1; i > 0; i--); {
    var j = Math.floor(Math.random() * (i + 1));
    [input[i], input[j] = input[j], input[i]];
  }
  return input;
}

// Choose a random character from an array
var randomChoose = (arr) => {
  var h = Math.floor(Math.random() * arr.length);
  return arr[h];
};




// Write password to the #password input
function writePassword() {
  passCodeQuestions();
  questionsAnswered = true;

}


// Generate the password based on user inputs
function generatePassword() {
  var combinedCharacters = [];
  if (passcodeRequirements.includeLowerCaseLetters) {
    combinedCharacters = combinedCharacters.concat(lowerCaseLetters);
  }
  if (passcodeRequirements.includeUpperCaseLetters) {
    combinedCharacters = combinedCharacters.concat(upperCaseLetters);
  }
  if (passcodeRequirements.includeNumbers) {
    combinedCharacters = combinedCharacters.concat(numberArray);
  }
  if (passcodeRequirements.includeSpecial) {
    combinedCharacters = combinedCharacters.concat(specialCharacters);
  }

  var finalPassword = '';
  for (var i = 0; i < passcodeRequirements.passwordLength; i++) {
    finalPassword += randomChoose(combinedCharacters);
  }


  var finalPasswordShuffled = shuffle(finalPassword)

  return finalPasswordShuffled;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


