// Write out the code for the earlier sum function.

const sum = (arr) => {
  if (!arr.length) return 0;

  return arr[0] + sum(arr.slice(1)); //slicing is pretty [1,2,3,4,5].slice(7) // => [] // TIL slicing outside of array range gives back an empty array
};

console.log(sum([3, 7, 5])); // 15
