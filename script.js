var buttonElement= document.getElementById("generate")
var charGroup= []
var lowerCaseChars = ["a", "b", "c", "d"]
var upperCaseChars = ["A", "B", "C", "D"]
var numberChars = ["1", "2", "3", "'"]
var specialChars = ["#", "%", "$"]
var userChoice

function startTheApp () {
   userChoice = "";
   charGroup =[];
   // console.log("I exist and I am working!");
   askQuestions();
   document.getElementById("password").value = generate();
}

function askQuestions(){

   userChoice = prompt("How many characters do you like your password to contain?");
   while (userChoice < 8 || userChoice > 128) {
      userChoice = prompt("Not a valid password. Give me something between 8-128");
   }
   
   
   var lowercase = confirm('Do you want lowercase?');
   if (lowercase ===  true) {
      charGroup = charGroup.concat(lowerCaseChars)
      
   }
   var uppercase = confirm('Do you want uppercase?');
   if(uppercase === true){
      charGroup = charGroup.concat(upperCaseChars)
   }
   
   var numbers = confirm('Do you want numeric?');
   if (numbers === true){
      charGroup = charGroup.concat(numberChars)
   }
   var symbols = confirm('Do you want symbols');
   if (symbols === true) {
      charGroup = charGroup.concat(specialChars)
   }

   // console.log(charGroup)
}
 
function generate(){

   let randomPassword = "";   
   // console.log(userChoice)
   for(var i = 0; i < userChoice; i++){
      var charIndex = Math.floor(Math.random() * charGroup.length);
      randomPassword += charGroup[charIndex]
   }
   return randomPassword;
   
}

buttonElement.addEventListener("click", startTheApp)

   