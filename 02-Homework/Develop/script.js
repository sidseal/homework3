 // Assignment Code
// var generateBtn = document.querySelector("#generate");



function writePassword() {
  
   var length = prompt("How many characters would you want your password to be? Choose number between 8-128!");
   var special = confirm("Would you like to use special characters?");
   var upperC  = confirm("Would you like to use uppercase letters?");
   var lowerC = confirm("Would you like to use lowercase letters?");
   var numbers =confirm("Would you like to use numbers?");
   var numCh = length;
   var ucUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var ucLower = "abcdefghijklmnopqrstuvwxyz";
   var ucSpecial = "#~!$%@&*()/><;:?+-";
   var ucNumbers ="1234567890";
   var myvalues;
   myvalues=""
   var mypassword = ""
   
   
   
   if (upperC){
      
      myvalues= myvalues.concat(ucUpper)
      
   }
   if (special){
      myvalues= myvalues.concat(ucSpecial)
      
   }
   if (lowerC){
      myvalues= myvalues.concat(ucLower)
      
   }
   if (numbers){
      myvalues= myvalues.concat(ucNumbers)
      
   }
   



  for(var i=0; i<=length; i++){
    mypassword = mypassword + myvalues.charAt(Math.floor(Math.random()* myvalues.length-1));
  }
  
  
  passwordText.value = mypassword;
  
 
  
}

var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

 
