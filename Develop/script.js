// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password
const generatePassword = () => {
  /*
   * All your code goes here to generate a password
   */
  // get the password length 
  const userInput = prompt("please enter a password length which is at least 8 characters long");
  //if user input is valid go to the last branch where you convert to number
  const isValidInput = (userInput) => {
  if (userInput =>8 && <= 128) {
  alert= ("The password length meets the requirements")
//if not => 8 then we alert user to have 8 or more in length
  } else if {
  alert= ("your password is too short")
  //convert to a a number and store in a variable numberOfCategories 
 } else {
    alert("please re-enter a valid password length")
  }
 const userInput = 10

//I am verifying what categories the user has chosen
const isValidCategories = (categories) => {
  if (categories === "lowercase" || categories === "uppercase")
  return true;
}; else {
  if (categories !== "specialCharacters" &&  !"numeric")
  return false;
}
//object array where the user will pick at least one category to be true otherwise alert error
//will use display.item, display.category, display.text.
const criteria = [
  {
    category:"lowerCase",
    items: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    text: "would you like to include the category of lowercase"
  },

  {
    category: "upperCase",
    items:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',],
    text: "would you like to include the category of uppercase"
  },

  {
    category:"numeric",
    items:["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    text:"would you like to include the category of numeric"
  },

 {
    category:"specialCharacters",
   items: [],
   text: "would you like the category of spcecialcharacters"
  }
] // end of my array objects list

 }
 // Write password to the #password input
    const writePassword = () => {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
  };




  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

};