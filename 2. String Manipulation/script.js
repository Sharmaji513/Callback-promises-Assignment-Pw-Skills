/* 2. String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
with the manipulated string or the new string to the console. */

function manipulateString(str) {
    // Convert the string to uppercase
    const manipulatedString = str.toUpperCase();
    
    // Define the callback function
    function logString() {
        console.log("The manipulated string is:", manipulatedString);
    }
    
    // Return the callback function
    return logString;
}

// Example usage:
const callback = manipulateString("Hello, world!");
callback(); // This will log "The manipulated string is: HELLO, WORLD!" to the console
