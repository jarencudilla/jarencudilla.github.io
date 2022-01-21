//8kyu Kata 
//Reversed Strings


function solution(str){
  return str.split("").reverse().join("");
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
