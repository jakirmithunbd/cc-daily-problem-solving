function reverseString(data) {
    let str = '';
    for (let maxLen = data.length - 1; maxLen >= 0; maxLen--) {
        str += data[maxLen];
    }
    return str;
}

console.log(reverseString('Tanin'));
console.log(reverseString('Hello World'));