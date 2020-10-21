
// certainly prettier to read
// but perhaps it doesn't read as well on chrome debugger without the second variable
const count = (list) => {
  if (list.length === 0) {
    return 0; // if we just return; then we are doing 1 + undefined === NaN
  }
  return 1 + count(list.slice(1));
};

console.log(count([0, 1, 2, 3, 4, 5])); // 6

// Oh this is very GarageScript way of doing things
const kevinCount = (list, counter = 0) => {
  // base case?
  // divide and conquer
  // list.length is too easy...
  if (!list.length) return counter;

  return kevinCount(list.slice(1), ++counter); 
  // cool quirk counter++ won't work
  // since the counter will go up after the compiler reads counter
};

console.log(kevinCount([1, 2, 3, 4, 5])); // 5