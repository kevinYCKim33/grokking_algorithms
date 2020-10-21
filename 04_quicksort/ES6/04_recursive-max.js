const max = (list) => {
  if (list.length === 2) {
    return list[0] > list[1] ? list[0] : list[1];
  }
  const subMax = max(list.slice(1));
  return list[0] > subMax ? list[0] : subMax;
};

console.log(max([1, 5, 10, 25, 16, 1])); // 25

// find max num in a list

const kevinFindMax = (list, king = list[0]) => {
  // base case
  // empty array
  if (list.length === 0) return king;

  // divide and conquer
  const biggerKing = king > list[0] ? king : list[0];

  return kevinFindMax(list.slice(1), biggerKing);
};

console.log(kevinFindMax([8, 6, 7, 5, 3, 18, 9])); // 18
