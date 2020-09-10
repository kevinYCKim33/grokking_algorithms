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