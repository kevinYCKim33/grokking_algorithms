const count = (list) => {
  debugger;
  if (list.length === 0) return 0;

  return 1 + count(list.slice(1));
};

console.log(count([1, 2, 3, 4, 5, 6]));
