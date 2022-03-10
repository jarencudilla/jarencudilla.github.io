//7kyu Kata 
// Square Every Digit

// Initially, first thing that came in to mind was to do a `.split()`, then `.join()` 
// but then I don't know what else to use after the split. I wanted to try
// `Math.sqrt` or `Math.pow` as they should be an obvious choice, 
// but I learned that `.map` can be used like a for loop for functions

// 1st solution

function squareDigits(num){
  return Number(num.toString().split('').map(newNum => newNum * newNum).join(''));
}

// Basically the same as my 1st solution without `.map`
// 2nd Solution

function squareDigits(num){
var newNum = "";
num = num.toString();
for (let i = 0; i < num.length; i++)
{
  newNum = newNum + (num[i] * num[i]).toString();
}
return Number(newNum);
}
