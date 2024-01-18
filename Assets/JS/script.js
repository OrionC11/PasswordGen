// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "0123456789".split("")
var specials = "!@#$%^&*-+.?".split("")
var selections = []





// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function generatePassword() {
  // The following variables take user input to create a password based on.
  var isLowercase = false;
  var isUppercase = false;
  var isNumbers = false;
  var isSpecials = false;
  
  
  
  var isLowercase = confirm("Do you want lowercase letters?")
  var isUppercase = confirm("Do you want uppercase letters?")
  var isNumbers = confirm("Do you want Numbers?")
  var isSpecials = confirm("Do you want Special Characters? (!@#$%^&*-+.?)")
  var howLong = prompt("How long would you like the password to be? (Choose between 8-128 characters)")
  
  // This if statement will check to make sure the user selected a length between 8 and 128 characters and alert if it comes up false
  if (howLong >= 8 && howLong <= 128) {
    // The following if statements combine all of the possibilities into 1 array based on user choice
    if (isLowercase){
      selections = selections.concat(lowercase)
    }
    
    if (isUppercase){
      selections = selections.concat(uppercase)
    }
    
    if (isNumbers){
      selections = selections.concat(numbers)
    }
    
    if (isSpecials){
      selections = selections.concat(specials)
    }
      
    if (selections.length === 0) {
      alert("You MUST choose a character type!!!")
      return("")
    }
      
    else {
      var finalPass = []

      //this will push random characters from the total selections array to a final pass to be joined into a string later.
      for(let i = 0; i < howLong; i++){
        var randPick = Math.floor(Math.random()*selections.length)
        finalPass.push(selections[randPick])
      }
      
      //this now turns the array into a string
      var password = finalPass.join("")
      
      // This returns the password from the function allowing the writePassword() function to see it.
      return password;
        
    }
  }
  else {
    alert("You MUST pick between 8 and 128 characters!!!")
  }
}
  


 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
