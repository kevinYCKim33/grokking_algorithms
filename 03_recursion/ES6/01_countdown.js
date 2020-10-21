const countdown = i => {
  console.log(i);
  // base case
  if (i <= 0) {
    return;
  }

  countdown(i - 1); // no need to return??
};

countdown(5);

// MY ATTEPT
// const countdown = (num) => {
//   console.log(num)

//   if (num <= 0) return

//   return countdown(num - 1)
// }

// countdown(5)