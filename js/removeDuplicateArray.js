const arrs = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];
const newArrs = arrs.filter((value, index) => {
    console.log(value, index, arrs.indexOf(value));
    return arrs.indexOf(value) === index;
});
console.log(newArrs);

const farrs = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

let newfArrs = [];
farrs.forEach((item) => {
    if (!newfArrs.includes(item)) {
        newfArrs.push(item);
    }
});
console.log(newfArrs);