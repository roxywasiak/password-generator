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
  //storing the answer from prompt into passwordLength then getting the string and converting it to a number stored in passwordLengthNum and then returning it.
  const passwordLengthNum = parseInt(passwordLength, 10);
  //verifying the condition
  if (passwordLengthNum >= 8 && passwordLengthNum <= 128) {
    //please ask the user to select their criteria eg uppercase/lowercase etc
    const lowercase = confirm("Would you like to include lowercase?");
    //validating each confirm
    const uppercase = confirm("Would you like to include uppercase?");
    const numbers = confirm("Would you like to include numbers?");
    const special = confirm("Would you like to include spacial characters?");
    const getCriteria = [];
    if (lowercase) {
      getCriteria.push(
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
        "z"
      );
    }
    if (uppercase) {
      getCriteria.push(
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
        "Z"
      );
    }
    if (numbers) {
      getCriteria.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
    if (special) {
      getCriteria.push(
        "!”,“#”, “$”, “%”, “&”, “‘”, “(”,“), “*”, “+”, “,”, “-”, “.”, “/”, “:”, “;”, ” < “, “=”, ” > “, ” ? “,“@”,“[”, “\\“, “]”, ” ^ “, “_”,  “`”, “{”,  “|”, “}”  “~"
      );
    }
    return getCriteria;
  } else {
    alert("please enter a valid password length with valid criteria");
  }
};

//object array
const criteria = [
  ({
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
  }),
]; // end of my array objects list

//get password criteria function

//get a random password
const getRandomPassword = (passwordLength, GetCriteria) => {
  const passwordArray = [];
  for (let i = 0; i < passwordLength; i += 1) {
    //select random characters from the array
    const randomCategoryIndex = Math.floor(Math.random() * GetCriteria.length);

    // get random category
    const randomCategory = criteria[randomCategoryIndex];
    //get random index
    const randomIndex = Math.floor(Math.random() * randomCategory.length);
    //get random character
    const randomCharacter = randomCategory.charAt(randomIndex);
    passwordArray.push(randomCharacter);
  }
  return passwordArray.join("");
};
// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
