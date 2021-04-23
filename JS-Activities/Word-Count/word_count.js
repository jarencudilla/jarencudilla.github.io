// const words = [
//     'word',
//     'one of each',
//     'one fish two fish', 
//     'one fish two fish red fish blue fish',
//     'car : carpet as java : javascript!!&@$%^&',
//     'testing, 1, 2 testing',
//     'co-operative',
//     'two_words',
//     'go Go GO'
// ]

// console.log(words)

// function word_count(string) {
// 	var wordArray = wordString.split(/[' '+-+_+!]/);
// 	var err = Object.create(null);
// 	for (i = 0; i < wordArray.length; i++) {
// 		var word = wordArray[i];
// 		if (!err[word]) {
// 			err[word] = 1;
// 		} else {
// 			err[word]++;
// 		}
// 	}
// 	return err;
// };

// async function word_count() {
//     const count_words = await count_word()
//     return count_words
// }
// function count_word() {
//     var promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {

// sources: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// https://kbarker.dev/blog/building-a-word-and-character-count-app-in-vanilla-javascript/
// https://javascript.info/regexp-escaping
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

async function word_count(string) {
    const count_words = await count_word(string)
    return count_words
}
function count_word(str) {
    var promise = new Promise(function(resolve, reject) {
    const regEx = /[.,\/#!$%\^&\@*;:{}=\_`~()]/g;
    var counter = {};
    var wordString = str.toLowerCase().replace('_', ' ').split(' ');

    for (let word of wordString) {
      if (regEx.test(word) && word.length < 2) {
        continue;
      }
      var wordStrings = '';
      for (let char of word) {
        if (!regEx.test(char)) {
         wordStrings += char;
        } else {
          break;
        }
      }
      word = wordStrings;
      !(word in counter) ? (counter[word] = 1) : (counter[word] += 1);
;
    }
    resolve(counter);
  });
  return promise;
}

module.exports = word_count;