/*
Task 1: Initialize the Array
1. Create an array with a size of seven.
2. Fill all slots with the string "Hello"using .fill
3. Log your array and confirm it has seven elements, all set to"Hello".

Task 2: Update the Array
1. Now, fill only part of the array with a different string or number using
.fill. For example, you might fill it with “Hi” or 2 or 5. You will need to
decide how many slots in the array to change.
2. Log your new changes.

Task 3: Populate the Array with a for Loop
1. Create a new array with a size of five.
2. Using a for Loop, assign each slot a numeric value that is index * 10
3. Log your results to confirm the array contains the correct values: 0, 10, 20,
30, 40.
*/

// Task 1: Initialize the Array
let newArray = Array(7);
let filledArray = newArray.fill("Hello");
console.log(filledArray);

// Task 2: Updating the existing Array
let updatedFilledArray = filledArray.fill("Hi", 1, 4);
console.log(updatedFilledArray);

// Task 3: Populate the Array with a for loop
let numbersArray = Array(5);
for (let i = 0; i < numbersArray.length; i++) {
    numbersArray[i] = i * 10;
}
console.log(numbersArray);