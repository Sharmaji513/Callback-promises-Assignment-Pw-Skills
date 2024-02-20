/* 5. Greeting Promise.
You need to write a function that takes a name as input and returns a promise that resolves with a greeting
message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".*/

function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject("Name is required");
        } else {
        
            resolve(`Hello, ${name}!`);
        }
    });
}


const name = "Mithun";

greetWithPromise(name)
    .then(message => {
        console.log(message); // This will log "Hello, Mithun!" to the console
    });
