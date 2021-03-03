// #1 Print the number of integers in an array that are above the given input and the number that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”.

const aboveBelow = (arr, input) => {
  // keep count for above and bellow integers
  let countAbove = 0;
  let countBelow = 0;

  //iterate
  // condition: if is greater than input add 1 to above and if lower than input add one to below
  arr.map((num) => (num > input ? (countAbove += 1) : (countBelow += 1)));

  return `above: ${countAbove}, below: ${countBelow}`;
};

console.log(aboveBelow([1, 5, 2, 1, 10], 6)); // above: 1, below: 4
console.log(aboveBelow([1, 5, 2, 1, 10], 3)); // above: 2, below: 3
console.log(aboveBelow([1, 5, 2, 1, 10], 10)); // above: 0, below: 5
