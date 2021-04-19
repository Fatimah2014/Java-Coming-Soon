



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

   
   let randomPassword = "";
   let charGroup = "[ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*?[]()_+=";
   

   for(var i = 0; i <=8; i++){
      var char = Math.floor(Math.random() * charGroup.length + 1);
      randomPassword+= charGroup.charAt(char)
   }
   return randomPassword;
   
}

document.getElementById("password").value = generate();



   