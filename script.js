var length = prompt("How many characters do you like your password to contain?");
if (length >= 8 && length<= 128) {
}else {
alert ("Not a valid password");
}


let lowercase= prompt('Do you want lowercase?');
if (lower=true) {
  

}
var uppercase= prompt('Do you want uppercase?');
if(upper= true){
}

var numeric = prompt('Do you want numeric?');
if (numbers= true){
 }
 var signs= prompt('Do you want symbols');
if (symbols= true) {
alert ('Valid Password')
}


 
function generate(){

   let content= document.getElementById('password').value;
   
   let charGroup = "ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=";
   
   let randomPassword = "";
   
   for(var i = 0; i <= content; i++) {
      randomPassword = randomPassword + charGroup.charAt(Math.floor(Math.random() * Math.floor(charGroup.content -1)));
   }
       

document.getElementById("password").value = randomPassword;

document.getElementById("length").innerHTML = "length:30";
}