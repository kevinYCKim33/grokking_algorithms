// find max num in a list

const findMax = (list, king = list[0]) => {
  // base case
  // empty array
  if (list.length === 0) return king;

  // divide and conquer
  const biggerKing = king > list[0] ? king : list[0];

  return findMax(list.slice(1), biggerKing);
};

console.log(findMax([8, 6, 7, 5, 3, 18, 9])); // 18
