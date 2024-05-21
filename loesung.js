const max1 = (first = 0, ...following) => {
  let max = first;
  for (const value of following) {
    max = max > value ? max : value;
  }
  return max;
};
console.log(max1(1, 8, 11, 9));

// oder

const max2 = (...a) => a.reduce((b, c) => b > c ? b : c);
console.log(max2(1, 7, 12, 9));
