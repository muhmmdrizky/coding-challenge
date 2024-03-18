/*
  Link: https://www.codewars.com/kata/57f780909f7e8e3183000078

  Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/
// Cara pertama
{
  function grow(x) {
    let result = x[0];
    for (let i = 1; i < x.length; i++) {
      result = result * x[i];
    }
    return result;
  }
}

// Cara kedua
{
  const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
}

console.log(grow([1, 2, 3, 4]));
