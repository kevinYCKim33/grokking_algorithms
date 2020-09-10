const binarySearch = (arr, num) => {
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

  // get the size of the array

  // start at the middle

  // low index should start at 0

  // high index should start at end

  // i'm tempted to check if any of the low or high bounds are right right away...

  // when should this keep going?

  //
};

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // 1
console.log(binarySearch(myList, -1)); // null
