// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// global myPassword array so arrays below can be added to create final array
myPassword=[]

// array choices
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

// generates password prompt and keeps within character length limits
function generatePassword(){
  generateBtn;
  numChar=prompt("How many charachters? \n (min 8: max 128)");
  if (numChar >= 8 && numChar <= 128){
    uppercaseChar();
    lowercaseChar();
    numbersChar();
    symbolsChar();
    makeid(numChar);
  } else{
    alert("Password has to be between 8 to 128 Characters.\n Try again");
  }
}

// uppercase prompt to choose whether user wants or doesnt want uppercase letters in password
function uppercaseChar(){
  const response = confirm("Do you want your password to have upper case letters?");
  
  if (response) {
      // add code if the user pressed the Ok button
      myPassword=myPassword.concat(upperLetters);
  } else {
      // add code if the user pressed the Cancel button
      console.log("Cancel was pressed");
  }
  }

// lowercase prompt to choose whether user wants or doesnt want lower case letters in password
function lowercaseChar(){
  const response = confirm("Do you want your password to have lower case letters?");
  
  if (response) {
      // add code if the user pressed the Ok button
      myPassword=myPassword.concat(lowerLetters);

  } else {
      // add code if the user pressed the Cancel button
      console.log("Cancel was pressed");
  }
  }
// number prompt to choose whether user wants or doesnt want numbers in password
function numbersChar(){
  const response = confirm("Do you want your password to have numbers?");
  
  if (response) {
      // add code if the user pressed the Ok button
      myPassword=myPassword.concat(numbers);
  } else {
      // add code if the user pressed the Cancel button
      console.log("Cancel was pressed");
  }
  }
// symbols prompt to choose whether user wants or doesnt want symbols in password
function symbolsChar(){
  const response = confirm("Do you want your password to have symbols?");
  
  if (response) {
      // add code if the user pressed the Ok button
      myPassword=myPassword.concat(symbols);
  } else {
      // add code if the user pressed the Cancel button
      console.log("Cancel was pressed");
  }
  }

function makeid(numChar) {
  var result           = '';
  var charactersLength = myPassword.length;
  // creates password with the desginated length and with the selected character type choices 
  for ( var i = 0; i < numChar; i++ ) {
      result += myPassword[Math.floor(Math.random() * charactersLength)];
  }
  // Write password to the #password input
  var passwordText = document.querySelector("#password");

  passwordText.value = result;
  generateBtn;
}

generatePassword();