function findFirstDuplicate(arr) {
  // type your code here
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]
      }
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 5");
  console.log("=>", findFirstDuplicate([5, 5, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([2, 1, 3, 4, 1]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([2, 1, 3, 4, 0]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Find the first value in the array that is a duplicate of a previous value
// Iterate through each value in the array, starting with the second value,
//      determine if it is a duplicate
// Loop through the array starting with the second value
// Use a second loop to compare the value to all previous values
// Return the value if it is a duplicate
// Return -1 if it loops through all values and finds no duplicates