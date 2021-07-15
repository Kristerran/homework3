// Setting Allowed numbers and symbols
// Each variable is a different allowed set that we will select with our html form
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "@!#$%^&*_?-+=";
const resultContainer = document.getElementById('passGen');
const length = document.getElementById('length');
const incLower = document.getElementById('lowercase');
const incUpper = document.getElementById('uppercase');
const incNumbers = document.getElementById('numbers');
const incSpecial = document.getElementById('special');
const genPassButton = document.getElementById('submitForm');
const form = document.getElementById('passwordGenForm');

// Shows or hides form to choose characters
function showForm() {
  var x = document.getElementById("passwordGenForm");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
};

// creates a string with our preferred characters
function createString() {
  let passString = "";
  incLower.checked ? (passString += lower) : "";
  incUpper.checked ? (passString += upper) : "";
  incNumbers.checked ? (passString += numbers) : "";
  incSpecial.checked ? (passString += symbols) : "";
  return passString;
};
// generate password function
function generatePassword() {
  // runs create string function to create our string
  let passString = createString();
  // remove content from password variable (for multiple runtimes)
  let password = "";
  // for loop, add random character from string until i = length
  for (let i = 0, n = passString.length; i < length; i++) {
    password += passString.charAt(Math.floor(Math.random() * n));
  };
  console.log(password);
  console.log(passString)
  return password;
};
// Add content to window
function apendPassword() {
  var password = generatePassword();
  document.getElementById("result").innerHTML = password;
};

// Adds event listener to create password button
document.getElementById("createForm").addEventListener("click", showForm);
// Adds event listener to generate password button
document.getElementById("submitForm").addEventListener("click", apendPassword);
// Set variables to choose from for password picker