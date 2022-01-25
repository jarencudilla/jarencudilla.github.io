//8kyu Kata 
//Reversed Strings


function solution(str){
  return str.split("").reverse().join("");
}


//MakeUpperCase
//Solution:

function makeUpperCase(str) {
  str = str.toUpperCase();
  return str;
}


// 7kyu Kata 
// Descending Order

//1st solution: missing something with parseint not sure how to make it work

function descendingOrder(n){
  
  let sortedN = n.tostring();
  let newArr = sortedN.split('');
  let sortArr = newArr.sort();
  let reverseArr = sortArr.reverse();
  let joinArr = reverseArr.join('');
  let parsedArr = parseint(joinArr+'');
  return(parsedArr);
}

//2nd solution: resulted in a timeout

function descendingOrder(n){
return descendingOrder(n.toString().split('').sort().reverse().join(''));
}

//3rd solution: this surprised me as I learned that you can use the unary plus on return, 

function descendingOrder(n){
let newNum = n.toString().split('').sort().reverse().join('');
return +newNum;
}

//I learned the usage of unary + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Unary_plus

// Highest and Lowest

// I also learned the usage of spread operator when doing the Highest and Lowest in codewars.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// After removing the spaces I had to find a way to check everything as `Math.max(numbers)` just returns a NaN

function highAndLow(numbers){
numbers = numbers.split(" ");
  let maxN = Math.max(...numbers);
  let minN = Math.min(...numbers);
  return (maxN + " " +  minN);
}

// 7Kyu 
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

//  Return Negative

// I tried `Math.abs(-num)` but tests failed. https://www.w3schools.com/jsref/jsref_abs.asp
// As I've been told that `Math.abs(num)` will always be positive and `-Math.abs(num)` will always be negative


function makeNegative(num) {
  return Math.abs(num) * -1;
}

// My updated solution is 

function makeNegative(num) {
  return -Math.abs(num);
}


// Find the next perfect square!
// This is a bit trickier, since I'm usually slow when it comes to math, and this problem really requires Math.sqrt() I also see a return -1; so that means I'm going to use a % modulo for the remainder.

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  sq = Math.sqrt(sq);
  if (var squareroot%sq === 0){
      squareroot = sq+=1;
  } else
  return -1;
}

// Yup this is wrong, so I had to research what really is a perfect square https://blog.prepscholar.com/list-of-perfect-squares this should give me an idea what to solve for
// Solution:

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  var squareroot;
  var newsquareroot;
    if (Math.sqrt(sq)%1 === 0){ // I changed %sq to %1
      squareroot = Math.sqrt(sq);
      newsquareroot = squareroot+=1; //squareroot add it to itself +1,I think newsquareroot and multiply it to itself
    } else {
      return -1;
    }
return newsquareroot*newsquareroot;
}

// YES!!! Passed

//6kyu

