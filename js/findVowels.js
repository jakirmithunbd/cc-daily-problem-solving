function countVowels(txt) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    // for (let i = 0; i < txt.length; i++) {
    //   if (vowels.includes(txt[i])) {
    //     count ++;
    //   }
    // }
    for (let letter of txt) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('Hello world'));
