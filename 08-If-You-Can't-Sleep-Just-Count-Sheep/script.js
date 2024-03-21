/*
Link: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

DESCRIPTION:
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/

// var countSheep = function (num) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += `${i} sheep...`;
//   }
//   return result;
// };

// var countSheep = function (num) {
//   return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join();
// };

const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(3));
