function mostFrequentChar(str) {

    let counts = {};

    let max = 0;

    let maxChar = '';
    
    for ( let char of str) {
        counts[char] = counts[char] + 1 || 1;

        if (counts[char] > max) {
            max = counts[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(mostFrequentChar("abbbbbbbcccccc"));