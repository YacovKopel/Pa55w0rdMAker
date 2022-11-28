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
myPassword=[]

var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']


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
  // var myPassword =lowerLetters.concat(upperLetters)
  var result           = '';
  var charactersLength = myPassword.length;
  for ( var i = 0; i < numChar; i++ ) {
      result += myPassword[Math.floor(Math.random() * charactersLength)];
  }
  console.log(result);
  console.log(result.length);
  console.log(myPassword);
}
function generatePassword(){
  generateBtn;
  numChar=prompt("How many charachters? \n (min 8: max 128)");
  if (numChar < 8 || numChar > 128){
    alert("Password has to be between 8 to 128 Characters.\n Try again");
  }
}

generatePassword();
uppercaseChar();
lowercaseChar();
numbersChar();
symbolsChar();
makeid(numChar);
