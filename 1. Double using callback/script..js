// Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.

function doubleArrayWithCallback(arr, callback) {
    return arr.map(callback);
  }
  
  function doubleCallback(num) {
    return num * 2;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4];

  const doubledNumbers = doubleArrayWithCallback(numbers, doubleCallback);

  
  console.log(doubledNumbers); // [2, 4, 6, 8]
  

