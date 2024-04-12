const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);
}


generatePassword();

document.getElementById("btn1").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
 
function copyPassword() {
    // Get the generated password
    var generatedPassword = passBox.innerText;
  
    // Use the Clipboard API to copy the password to the clipboard
    navigator.clipboard.writeText(generatedPassword)
      .then(function() {
        console.log('Password copied to clipboard successfully.');
      })
      .catch(function(error) {
        console.error('Unable to copy password to clipboard:', error);
      });
  }
  
  document.getElementById("btn2").addEventListener(
    "click",
    function() {
        copyPassword();
    }

)