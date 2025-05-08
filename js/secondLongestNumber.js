function secondLongestNumber(num) {
    let first = 0;
    let second = 0;
    for (let index = 0; index < num.length; index++) {
        let element = num[index];
        
        if ( element > first ) {
            second = first;
            first = element;
        } else if ( element > second ) {
            second = element;
        }
    }

    return second;
}

console.log(secondLongestNumber([120, 34, 200, 400, 50, 4000]));