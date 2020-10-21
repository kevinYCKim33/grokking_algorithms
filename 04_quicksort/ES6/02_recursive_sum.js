const sum = (list) => {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sum(list.slice(1)); 
  // slicing is pretty [1,2,3,4,5].slice(7) // => [] 
  // TIL slicing outside of array range gives back an empty array
};

console.log(sum([1, 2, 3, 4])); // 10

// Write out the code for the earlier sum function.

const kevinSum = (arr) => {
  if (!arr.length) return null;
  // if array's length is 1
  if (arr.length === 1) {
    return arr[0];
  }

  const thing = arr.splice(0, 1)[0];
  return thing + kevinSum(arr);
};

console.log(kevinSum([3, 7, 5])); // 15