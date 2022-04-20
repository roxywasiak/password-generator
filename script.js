// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password
const generatePassword = () => {
  /*
   * All your code goes here to generate a password
   */
  // get the password length
  const passwordLength = prompt(
    "Enter a password length of 8 or more and 128 characters or less"
  );
  console.log(passwordLength);

  //storing the answer from prompt into passwordLength then getting the string and converting it to a number stored in passwordLengthNum and then returning it.
  const passwordLengthNum = parseInt(passwordLength, 10);
  console.log(passwordLengthNum);

  //verifying the condition
  if (passwordLengthNum >= 8 && passwordLengthNum <= 128) {
    console.log("success");
    //please ask the user to select their criteria eg uppercase/lowercase etc
    const lowercase = confirm("Would you like to include lowercase?");
    console.log("you have chosen lowercase");
    const uppercase = confirm("Would you like to include uppercase?");
    console.log("uppercase");
    const numbers = confirm("Would you like to include numbers?");
    console.log("numbers yay");
    const special = confirm("Would you like to include spacial characters?");
    console.log("spacial");
  } else {
    alert("please enter a valid password length");
  }
};

//to verify what criteria the user has chosen
const chosenCriteria = (validCriteria) => {
  //the results function will display what criteria user has chosen
  //this is where I want to push my chosen criteria into a new array
  const resultCriteria = chosenCriteria(validCriteria);
  if (resultCriteria) {
    //selection is valid
  } else {
    //if selection is invalid
    //alert
  }
};
//this is what the user will pick ...the two true items
const getCriteria = (criteria) => {
  if (criteria === "lowercase" && criteria === "numeric") {
    return criteria.category.lowercase;
    return criteria.items.numeric;
    return criteria.text;
  }
};
//return criteria object with three keys at random?
//object array where the user will pick at least one category to be true otherwise alert error
const criteria = [
  {
    category: "lowerCase",
    items: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    text: "Would you like to include the category of lowercase?",
  },

  {
    category: "upperCase",
    items: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
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

//the questions
const validCriteria = getCriteria(criteria);
//return Boolean

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
