/* #2 Rotate the characters in a string by a given input and
have the overflow appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”. */

const rotateString = (str, rotate) =>
  // slice the rotate letters strings,
  // slice from beginning and exclude rotate letters
  // concat string
  `${str.slice(-rotate)}${str.slice(0, -rotate)}`;

console.log(rotateString("MyString", 2)); // ngMyStri
console.log(rotateString("MyString", 3)); // ingMyStr
console.log(rotateString("MyString", 4)); // ringMySt
console.log(rotateString("MyString", 5)); // tringMyS
console.log(rotateString("MyString", 6)); // StringMy
