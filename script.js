// Assignment Code
var passwordLength;
var lowercase;
var uppercase;
var numeric;
var specialcharacters;
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwuxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWUXYZ";
var numbersLetters = "0123456789";
var specialCharactersBox = "!@#$%^&*()_+-";


var generateBtn = document.querySelector("#generate");




generateBtn.addEventListener("click", generatePassword);

function generatePassword(){
  passwordLength = parseInt(prompt("Enter password length"));
  lowercase = prompt("Should password include lowercase characters?")
  uppercase = prompt("Should password include uppercase characters?")
  numeric = prompt("Should password include numeric characters?")
  specialcharacters = prompt("Should password include specialcharacters characters?")
  while(passwordLength < 8 || passwordLength > 128){
    if(passwordLength < 8 || passwordLength > 128){
      passwordLength = parseInt(prompt("Please enter the password between 8 and 128 characters."))
    }
  }
    if(lowercase == "yes" || uppercase == "yes" || numeric == "yes" || specialcharacters == "yes"){
      writePassword();
    } 
      else{
        alert("Please at least select one of the characters type")
      }
     
  
}


function writePassword(){
  console.log(lowercase);
  
  var possiblePassword = "";
  if(lowercase == "yes"){
    possiblePassword = possiblePassword + lowercaseAlphabet;
  }
  if(uppercase == "yes"){
    possiblePassword = possiblePassword + uppercaseAlphabet;
  }
  if(numeric == "yes"){
    possiblePassword = possiblePassword + numbersLetters;
  }
  if(specialcharacters == "yes"){
    possiblePassword = possiblePassword + specialCharactersBox;
  }

  var generatePassword = ""
  
  for(var i = 0; i < passwordLength; i++){
    let randomnumber = Math.random() * possiblePassword.length;
    generatePassword = generatePassword + possiblePassword[Math.floor(randomnumber)]
  }
  alert(generatePassword);


}

