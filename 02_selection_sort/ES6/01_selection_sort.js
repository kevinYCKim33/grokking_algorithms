// Selection Sort - O(n^2)
// Parameter:
//  1. random array

// 1. Finds the smallest value in an array
const findSmallestIndex = (array) => {
  let smallestElement = array[0]; // Stores the smallest value
  let smallestIndex = 0; // Stores the index of the smallest value

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

// 2. Sorts the array
const selectionSort = (array) => {
  const sortedArray = [];
  const length = array.length; 
  // incredibly clutch line; 
  // otherwise the length of the array will be shrinking as you run through the for loop

  for (let i = 0; i < length; i++) { // beautiful; the i is a bit misleading... just run it size of array times
    // Finds the smallest element in the given array 
    const smallestIndex = findSmallestIndex(array);
    // Adds the smallest element to new array
    sortedArray.push(array.splice(smallestIndex, 1)[0]); 
    // even as the array shrinks in size, the loop will run the exact amount it needs to; 
    // which is the size of the original array that you're sorting
  }

  return sortedArray;
};

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]


/*
MY SOLUTION
const smallestNumberIndex = (arr) => {
  let smallestIndex = 0
  let smallestNumber = arr[0]

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i]
    if (number < smallestNumber) {
      smallestNumber = number
      smallestIndex = i
    }
  }

  return smallestIndex
}

const selectionSort = (arr) => {
  const sortedArray = []
  const length = arr.length // incredibly clutch line

  for (let i = 0; i < length; i++) {
    // get the smallest index of the array as it is
    // permanently destroy the array to get its value
    // push to the sortedArray
    const smallestIndex = smallestNumberIndex(arr)
    sortedArray.push(arr.splice(smallestIndex, 1)[0])
  }
  return sortedArray


}

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]


*/