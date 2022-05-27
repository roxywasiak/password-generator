// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password
const getPasswordLength = () => {
  /*
   * All your code goes here to generate a password
   */
  // get the password length
  const passwordLength = prompt(
    "Enter a password length of 8 or more and 128 characters or less"
  );
  //storing the answer from prompt into passwordLength then getting the string and converting it to a number stored in passwordLengthNum and then returning it.
  const passwordLengthNum = parseInt(passwordLength, 10);
  return passwordLengthNum;
  //verifying the condition
};

//Password criteria function
const passwordCriteria = () => {
  //make user to confirm their criteria
  const lowercase = confirm("Would you like to include lowercase?");
  //validating each confirm
  const uppercase = confirm("Would you like to include uppercase?");
  const numbers = confirm("Would you like to include numbers?");
  const special = confirm("Would you like to include spacial characters?");
  //array which is empty
  const getCriteria = [];
  if (lowercase) {
    getCriteria.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (uppercase) {
    getCriteria.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (numbers) {
    getCriteria.push("0123456789");
  }
  if (special) {
    getCriteria.push("!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
  }
  return getCriteria;
};

//get the random items to be stored in new array
const getRandomPassword = (passwordLength, getCriteria) => {
  const passwordArray = [];
  for (let i = 0; i < passwordLength; i += 1) {
    //select random characters from the array
    const randomCategoryIndex = Math.floor(Math.random() * getCriteria.length);
    // get random category
    const randomCategory = getCriteria[randomCategoryIndex];
    //get random index
    const randomIndex = Math.floor(Math.random() * randomCategory.length);
    //get random character
    const randomCharacter = randomCategory.charAt(randomIndex);
    passwordArray.push(randomCharacter);
  }
  return passwordArray.join("");
};
// make the new random password to display
const generatePassword = () => {
  const passwordLengthNum = getPasswordLength();
  if (passwordLengthNum >= 8 && passwordLengthNum <= 128) {
    const getCriteria = passwordCriteria();
    const randomPassword = getRandomPassword(passwordLengthNum, getCriteria);
    return randomPassword;
  } else {
    alert("please enter a valid password length with valid criteria");
    return "";
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
