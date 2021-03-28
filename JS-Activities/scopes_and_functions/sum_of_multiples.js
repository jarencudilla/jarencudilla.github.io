// function sumOfMultiples(number, factors) {
//   factors = 0;
//    for ( let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 ===0)
//     factors += i;
//    }
//   return factors;
// }

// function sumOfMultiples(number, factors) {
//    let sum = 0;
//     for (let i = 0; i < number; i++) {
//       if (i % factors[0] === 0 || i % factors[1] === 0 || i % factors[2] === 0) {
//       sum += i;
//       }
//     }
//   return sum;
// }

function sumOfMultiples(number, factors) {
  let sum = 0;
  for ( let i = 0; i < number; i++) { 
    for (let j = 0; j < factors.length; j++) {   
      if (i % factors[j] === 0 ) {
       sum += i;
       break;
      }
    }
  }
   return sum;
}

module.exports = sumOfMultiples;
