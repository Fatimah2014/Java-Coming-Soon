
var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower= "abcdefghijklmnopqrstuvwxyz";
var numbers= "0123456789";
var symbols= "!@#$%^&*";

var password= [upper] + [lower] + [numbers]+ [symbols];

var generatePassword = function () {
var lengthAlert= window.prompt("How many characters do you like your password to contain?");
if (lengthAlert <10 || lengthAlert >129 ); {
alert("Length must be greater than 10 or less than 129 characters");
}}


var lowercase= window.prompt('Do you want lowercase?');
if (lowercase == true) {
return;
else 
   alert("Not a valid Password");

}
var uppercase= window.prompt('Do you want uppercase?');
if  (uppercase= true) {
  return;
}else {
alert('Not a valid Password')
}

var numeric = window.prompt('Do you want numeric?');
if  (numeric= true) {
   return;
}else {
 alert('Not a valid Password')
};

 var symbols= window.prompt('Do you want symbols');
if  (symbols= true) {
   return;
}else {
 alert('Not a valid Password')
}

 var password= '';

if (lowercase != true && lowercase != true && numeric != true && symbols != true){
   alert("password not valid")
}



const Password= document.getSelection ('password')


var generateBtn = document.querySelector("#generate");
function generatePassword ();

function writePassword() {
  var password = generatePassword();
  if (password)
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;()
  var generateBtn = document.querySelector("#generate");
function generatePassword ();

}
let generatePassword= '';

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var password=generatePassword;

function generatePassword(lowercase, uppercase, numeric, symbols) {
    generatePassword = '';
    for (var i = 0, n = length; i < length; i++) {
pwd += getRandomCharacters.chartAt(Math.floor(Math.random()* getRandomCharacters.length))

    }

