// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=<>?";

function getRandomCharacter(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
}

function generatePassword() {
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128. ");
    return "";
  }

  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("please select at least one character type.");
    return "";
  }

  var selectedChars = "";
  if (useLowercase) {
    selectedChars += lowercaseChars;
  }
  if (useUppercase) {
    selectedChars += uppercaseChars;
  }
  if (useNumeric) {
    selectedChars += numericChars;
  }
  if (useSpecial) {
    selectedChars += specialChars;
  }

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += getRandomCharacter(selectedChars);
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
