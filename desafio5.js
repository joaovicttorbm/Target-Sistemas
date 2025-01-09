function reverseString(str) {
    let reversedStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]; 
    }
    return reversedStr;
}


const inputString = "Hello, World!";
const result = reverseString(inputString);
console.log(`Original String: ${inputString}`);
console.log(`Reverso String: ${result}`);