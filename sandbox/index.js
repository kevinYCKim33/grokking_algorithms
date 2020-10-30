const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter((key) => key <= pivot); // this seems inefficient runthrough
  const keysAreMorePivot = array.slice(1).filter((key) => key > pivot); // you are running through it twice??
  return [
    ...quickSort(keysAreLessPivot),
    pivot,
    ...quickSort(keysAreMorePivot),
  ];
};

console.log(quickSort([10, 5, 2, 3])); // [2, 3, 5, 10]

const kevinQuickSort = (arr) => {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const slicedArr = arr.slice(1);
  const smallerThanOrEqualPivotArr = [];
  const largerThanPivotArr = [];

  // mine seems a lot more readable!
  for (elem of slicedArr) {
    if (elem <= pivot) {
      smallerThanOrEqualPivotArr.push(elem);
    } else {
      largerThanPivotArr.push(elem);
    }
  }

  return [
    ...kevinQuickSort(smallerThanOrEqualPivotArr),
    pivot,
    ...kevinQuickSort(largerThanPivotArr),
  ];
};

console.log(kevinQuickSort([8, 6, 7, 5, 3, 0, 9])); // [0, 3, 5, 6, 7, 8, 9]
