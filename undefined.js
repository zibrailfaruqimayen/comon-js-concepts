/* 
8 ways to get undefine
1. variable that is not initialized will give undefine 
*/

// 1.
let first;
function second(a, b) {
  const total = a + b;
}
const result = second();
console.log(first);
