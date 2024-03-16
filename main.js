const upper = document.getElementById("includeUppercase");
const symbol = document.getElementById("includeSymbols");
const num = document.getElementById("includeNumbers"); 

const gButton = document.getElementById("buttonn"); 
gButton.addEventListener('click', generatePass); 


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const allSymbol = "!@#$%^&*()-_=+[{]}|;:,<.>/?";
const numbers = "0123456789";



function generatePass() {
    let password = "";
  let length = Math.floor(Math.random() * 9) + 8;
  let totalChars = lowerCase; 

  totalChars += upper.checked ? upperCase : ""; 
  totalChars += symbol.checked ? allSymbol : ""; 
  totalChars += num.checked ? numbers : ""; 
  

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * totalChars.length);
    password += totalChars.substring(randomIndex, randomIndex+1); 
  }

  document.getElementById("showPass").value = password;
}

document.getElementById('copy').addEventListener('click', function() {
    var password = document.getElementById('showPass').value;
    var copyInput = document.createElement('input');
    copyInput.value = password;
    document.body.appendChild(copyInput);
    copyInput.select();
    document.execCommand('copy');
    document.body.removeChild(copyInput);
    alert("Password is Copied to Clipboard"); 
  });
