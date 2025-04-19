function isPalindrome(str) {
let txt = str.toLowerCase();

    for (let i = 0; i < txt.length - 1; i++) {
        if (txt[i] !== txt[txt.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('Racecar')); 
console.log(isPalindrome('hello'));