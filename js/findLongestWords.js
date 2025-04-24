function fineLongestWords(str) {
    let words = '';
    let longestWord = '';

    for (let i = 0; i < str.length; i++) {
        
        if (
            (str[i] >= 'a' && str[i] <= 'z') ||
            (str[i] >= 'A' && str[i] <= 'Z') ||
            (str[i] >= '0' && str[i] <= '9')
        ) {
            words += str[i];
        } else {
            if (words.length > longestWord.length) {
                longestWord = words;
            }
            words = '';
        }
    }

    if (words.length > longestWord.length) {
        longestWord = words;
    }
    return longestWord;
}

// Ifty
// const findLongestWord = (sentence) => {
//     let longestWord = '';
//     let initialWord = '';
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === ' ') {
//             initialWord = '';
//             continue;
//         }
//         if (
//             (sentence[i] >= 'a' && sentence[i] <= 'z') ||
//             (sentence[i] >= 'A' && sentence[i] <= 'Z') ||
//             (sentence[i] >= '0' && sentence[i] <= '9')
//         ) {
//             initialWord += sentence[i];
//             if (initialWord.length > longestWord.length) {
//                 longestWord = initialWord;
//             }
//         }
//     }
//     return longestWord;
// };

// console.log(findLongestWord("Hello there, I'm learning Javascripts."));

// method 2
// function findLongestWord(mySentence) {
//     singleWord = '';
//     longestWord = '';
//     wordStorage = [];

//     for (let i = 0; i <= mySentence.length; i++) {
//         if (mySentence[i] === ' ' || i === mySentence.length) {
//             if (singleWord.length > longestWord.length) {
//                 longestWord = singleWord;
//             }
//             wordStorage.push(singleWord, singleWord.length);
//             singleWord = ' ';
//         } else {
//             singleWord += mySentence[i];
//         }
//     }
//     console.log(
//         `The longest word is:"${longestWord}" and it has "${longestWord.length}" characters`
//     );
//     console.log(`The words in the sentence are: ${wordStorage}`);
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');

console.log(fineLongestWords("The quick brown fox jumped over the lazy dog asdfasdfasd")); 