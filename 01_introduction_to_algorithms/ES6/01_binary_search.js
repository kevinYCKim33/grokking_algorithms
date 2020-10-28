const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // 1
console.log(binarySearch(myList, -1)); // null

// my attempt

const kevinBinarySearch = (arr, num) => {
  let lowBound = 0;
  let highBound = arr.length - 1;

  while (lowBound <= highBound) {
    let mid = Math.floor((lowBound + highBound) / 2);
    let guess = arr[mid];

    if (guess === num) {
      return mid;
    }

    if (guess > num) {
      highBound = mid - 1; // cause it can't be mid
    }

    if (guess < num) {
      lowBound = mid + 1; // cause it can't be mid
    }
  }

  return null;

/*
// binarySearch rundown edition
// const array = [3, 6, 12, 55, 120, 190, 258, 357, 1028]
// binarySearch(array, 258)

const binarySearch = (list, item) => {
  let lowIndex = 0;
  let highIndex = list.length - 1; // 8

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2); // 4
    let midIndexValue = list[midIndex]; // list[4] = 120

    // is 120 equal to my item 258?
    if (midIndexValue === item) {
      return midIndex;
    }
    // skipping the above automatically slashes out 120

    // is 120 greater than my item 258?
    if (midIndexValue > item) {
      highIndex = midIndex - 1;
    } 
    // is 120 less than my item 258?
    else {
      // so the lowIndex is now one above the midpoint
      // it doesn't have to be the new endpoint
      lowIndex = midIndex + 1;
    
    }
  }

  return null;
};
*/