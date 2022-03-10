//8kyu Kata 
//Summation - Grasshopper
// First solution is `num + (num + 1)` thinking it would be 1 + (1+1 = 2) = 3, but nothing happened.
// `num *= 1` passed for the 1+2 = 3 but failed on 1+2+3+4+5+6+7+8

//  var summation = function (num) {
//    return num + (num + 1) 
//  }

// Final solution
// safest option for me is to do a loop as long as i <= num, i iterates

 var summation = function (num) {
     let sum = 0;
     for(let i = 0; i <= num; i++) {
         sum += i;
     }
     return sum;
 }