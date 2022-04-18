// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password
const generatePassword = () => {
  /*
   * All your code goes here to generate a password
   */
  // get the password length
  const passwordLength = prompt("How long would you like your password?");
  //storing the answer from prompt into passwordLength then getting the string and converting it to a number stored in passwordLengthNum and then returning it.
  const passwordLengthNum = parseInt(passwordLength, 10);
  if(passwordLengthNum >=8 && <=128) {
  
  } else {
    alert = ("please enter a password length");
  }

  
 

  //if user input is valid go to the last branch where you convert to number
  const isValidInput = (passwordLengthNum) => {};
  //The questions function
  const getCriteria = (criteria) => {
  //return criteria object with three keys
  //object array where the user will pick at least one category to be true otherwise alert error
  //will use display.items, display.category, display.text.
  const criteria = [
  {
    category: "lowerCase",
    items: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q","r", "s", "t", "u","v", "w", "x", "y", "z",],
    text: "Would you like to include the category of lowercase?",
  },

  {
    category: "upperCase",
    items: [ "A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    text: "Would you like to include the category of uppercase?",
  },

  {
    category: "numeric",
    items: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    text: "Would you like to include the category of numeric?",
  },

  {
    category: "specialCharacters",
    items: [
      "!”,“#”, “$”, “%”, “&”, “‘”, “(”,“), “*”, “+”, “,”, “-”, “.”, “/”, “:”, “;”, ” < “, “=”, ” > “, ” ? “,“@”,“[”, “\\“, “]”, ” ^ “, “_”,  “`”, “{”,  “|”, “}”  “~",
    ],
    text: "Would you like the category of specialCharacters?",
  },
]; // end of my array objects list
  };

  const chosenCriteria = (validCriteria) => {};
  //the results function will display what criteria user has chosen

  //the questions
  const validCriteria = getCriteria(criteria);
  //return Boolean

  const resultCriteria = chosenCriteria(validCriteria);
  if (resultCriteria) {
    //selection is valid
  } else {
    //if selection is invalid
    //alert
  }
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
