/*
Link: https://www.codewars.com/kata/5a00e05cc374cb34d100000d/javascript

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

// Cara pertama
{
  const reverseSeq = (n) => {
    const result = [];
    for (let i = n; i >= 1; i--) {
      result.push(i);
    }
    return result;
  };

  console.log(reverseSeq(5));
}

// Cara kedua
{
  const reverseSeq = (n) => {
    return Array(n)
      .fill()
      .map((el, i) => i + 1)
      .reverse();
  };
  console.log(reverseSeq(5));
}

// Cara ketiga
{
  const reverseSeq = (n) => {
    return [...Array(n)].map((el, i) => i + 1).reverse();
  };
  console.log(reverseSeq(5));
}
