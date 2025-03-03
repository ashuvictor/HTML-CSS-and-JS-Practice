const display = document.getElementById("display");

const appendValue = (value) => {
  display.value += value;
};

const clearDisplay = () => {
  display.value = "";
};

const deleteLast = () => {
  display.value = display.value.slice(0, -1);
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    console.log(err);
    display.value = "Error";
    setTimeout(() => {
      clearDisplay();
    }, 1500);
  }
};


Array.slice()
Syntax:


Copy
array.slice([begin[, end]])
Parameters:

begin (optional):
The zero-based index at which to begin extraction.
If omitted, extraction begins at index 0.
If negative, it indicates an offset from the end of the array (e.g., -1 refers to the last element).
end (optional):
The zero-based index before which to end extraction. The element at this index is not included.
If omitted, extraction continues to the end of the array.
If negative, it indicates an offset from the end of the array.
Example:


Copy
const numbers = [1, 2, 3, 4, 5];
const subset = numbers.slice(1, 4); // Extracts elements at indices 1 to 3: [2, 3, 4]
console.log(subset); // Output: [2, 3, 4]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]
Array.splice()
Syntax:

javascript
Copy
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
Parameters:

start:
The index at which to start changing the array.
If negative, it will begin that many elements from the end.
deleteCount (optional):
An integer indicating the number of elements to remove from the array, starting from the index specified by start.
If deleteCount is omitted, all elements from start to the end of the array are removed.
item1, item2, ... (optional):
The elements to add to the array, beginning at the start index.
If no elements are specified, splice only removes elements.
Example:

javascript
Copy
const fruits = ['apple', 'banana', 'cherry', 'date'];
// Remove 2 elements starting at index 1, and insert 'blueberry' and 'kiwi'
const removed = fruits.splice(1, 2, 'blueberry', 'kiwi'); 

console.log(removed); // Output: ['banana', 'cherry'] (the removed elements)
console.log(fruits);  // Modified array: ['apple', 'blueberry', 'kiwi', 'date']
Additional Note:
Array.slice() is non-destructive; it returns a new array (or substring for strings) and leaves the original array unchanged.
Array.splice() is destructive; it modifies the original array by removing or replacing elements and optionally inserting new elements.
These syntaxes are essential for understanding how to extract parts of arrays or modify them directly in JavaScript.
