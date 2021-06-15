////// Assignment code here


//// Generate Password

// Variables for generatePassword()
const charCatagories = {
    upCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
    'P','Q','R','S','T','U','V','W','X','Y','Z'],
    lowCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'],
    number: ['0','1','2','3','4','5','6','7','8','9'],
    symbol: ['£','$','&','(',')','*','+','[',']','@','#','^','-','_','!','?'],
}


function passLength () {
    // prompt returns a string, we need it to be a number so we parseInt
    let answer =  parseInt(prompt("How long do you want your password to me? min: 8 max: 128"))
    //we just make sure its a good number -- this is the bad case
    if (answer < 8 || answer > 128) {
        alert('hey dumb dumb its gotta be a number and between 8 and 128')
        passLength()
    } else {
        //they answered right-- they are smarties
        return answer;
    }
}

function characterCatagories() {
    let availableCharacters = ''

    let wantUppers = confirm('Do you want uppercase? (A-Z)') //wantUppers = true/false (confirm returns boolean)
    let wantLowers = confirm('Do you want lowercase? (a-z)') 
    let wantNumbers = confirm('Do you want Numbers? "0-9"')
    let wantSymbols = confirm('Do you want Special Characters? "£$&()*+[]@#^-_!?"')

    //they answer no to every character set
    if (!wantUppers && !wantLowers && !wantSymbols && !wantNumbers) { 
        alert('Hey dumb dumb, we need characters to chose from. How do we make a password with no charactrs?');
        characterCatagories();
    } else {
        //they answered yes to at least one thing
        if (wantUppers) {
            // concatenating the string'd version of the array set -BELOW COULD ALSO BE DESCRIBED AS- join('') takes the array'd [values] and turns it into 1 string, as apposed to how its currently seperated into individual strings for each letter/number/symbol. !!!You could avoid using this if you set up your arrays more effienctly the first time, dummmy...
            availableCharacters += charCatagories.upCase.join('')
        }
        if (wantLowers) {
            availableCharacters += charCatagories.lowCase.join('')
        }
        if (wantNumbers) { 
            availableCharacters += charCatagories.number.join('')
        }
        if (wantSymbols) { 
            availableCharacters += charCatagories.symbol.join('')
        }

        return availableCharacters
    }
}


function generatePassword() {
    let password = ''
    //start the questions 
    // length of password
    let desiredLength = passLength();  
    // What combination of characters do you want in your password?
    let avaiableCharacterSetAsString = characterCatagories();

    // use the above data to create a password with a for
    // manipulate to create actual password
    for (var i = 0; i <= desiredLength; i++) { 
        
        return password;
    }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
    // storing something as password. it is the result of the generate password function
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    //we put the generated password on the page
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);