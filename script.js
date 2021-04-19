



var userChoice = prompt("How many characters do you like your password to contain?");
if (userChoice >= 8 && userChoice<= 128) {
}else {
alert ("Not a valid password");
}


var lowercase = prompt('Do you want lowercase?');
if (lowercase=true) {
  

}
var uppercase = prompt('Do you want uppercase?');
if(uppercase= true){
}

var numbers = prompt('Do you want numeric?');
if (numbers= true){
 }
 var symbols = prompt('Do you want symbols');
if (symbols= true) {
alert ('Valid Password')
}


 
function generate(){

   let content= document.getElementById('password').value;
   
   let charGroup = "ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=";
   let randomPassword = ' '

   for(var i = 0; i <=content; i++){
      randomPassword = randomPassword + charGroup.charAt(Math.floor(Math.random() * Math.floor(content.length-1)));
   
   
   }

document.getElementById("password").value = randomPassword;

document.getElementById("password").innerHTML += randomPassword;


   }