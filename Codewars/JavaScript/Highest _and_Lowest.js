//7kyu Kata 
// Highest and Lowest

// After removing the spaces I had to find a way to check everything as `Math.max(numbers)` just returns a NaN

// I learned the usage of spread operator when doing the Highest and Lowest in codewars.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function highAndLow(numbers){
  numbers = numbers.split(" ");
    let maxN = Math.max(...numbers);
    let minN = Math.min(...numbers);
    return (maxN + " " +  minN);
  }

