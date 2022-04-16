// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password
const generatePassword = () => {
  /*
   * All your code goes here to generate a password
   */
  // get the password length 
  const getPasswordLength = {} => {};

  //get the password criteria this is were the objects array is
  const getPasswordCriteria = {} => {};

  //create the random password
  const createRandomPassword = {} => {};


 // Write password to the #password input
  const writePassword = () => {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
  };

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

