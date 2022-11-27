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


var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

var lowLetter = lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
var upLetter = upperLetters[Math.floor(Math.random()*upperLetters.length)];
var num = numbers[Math.floor(Math.random()*numbers.length)];
var sym = symbols[Math.floor(Math.random()*symbols.length)];


function uppercaseChar(){
  const response = confirm("Do you want your password to have upper case letters?");
  
  if (response) {
      // add code if the user pressed the Ok button
      console.log(upLetter);
  } else {
      // add code if the user pressed the Cancel button
      console.log("Cancel was pressed");
  }
  }

function lowercaseChar(){
  const response = confirm("Do you want your password to have lower case letters?");
  
  if (response) {
      // add code if the user pressed the Ok button
      console.log(lowLetter);
  } else {
      // add code if the user pressed the Cancel button
      console.log("Cancel was pressed");
  }
  }

function numbersChar(){
  const response = confirm("Do you want your password to have upper case letters?");
  
  if (response) {
      // add code if the user pressed the Ok button
      console.log(num);
  } else {
      // add code if the user pressed the Cancel button
      console.log("Cancel was pressed");
  }
  }

function symbolsChar(){
  const response = confirm("Do you want your password to have upper case letters?");
  
  if (response) {
      // add code if the user pressed the Ok button
      console.log(sym);
  } else {
      // add code if the user pressed the Cancel button
      console.log("Cancel was pressed");
  }
  }
  function makeid(numChar) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.numChar;
    for ( var i = 0; i < numChar; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

function generatePassword(){
  generateBtn;
  numChar=prompt("How many charachters? \n (min 8: max 128)");
  if (numChar < 8 || numChar > 128){
    alert("Password has to be between 8 to 128 Characters.\n Try again");
  }
  makeid();
  // uppercaseChar();
  // lowercaseChar();
  // numbersChar();
  // symbolsChar();
}