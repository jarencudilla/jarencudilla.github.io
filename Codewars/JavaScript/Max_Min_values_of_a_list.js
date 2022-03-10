//8kyu Kata 
//Find Maximum and Minimum Values of a List

//Since the purpose is to find out the Max and Min value of "list", I used a spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax so it can check everything in list without having to guess the length of the array.

//Solution:
var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}
