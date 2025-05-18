const btn = document.getElementById('btn');
const content = document.getElementById('content');
const input = document.getElementById('debounce');
let count = 0;

function debounce(func, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

input.addEventListener(
    'input',
    debounce((e) => {
        content.innerHTML = e.target.value;
    }, 500)
);

btn.addEventListener(
    'click',
    debounce((e) => {
        content.innerHTML = `Button Clicked ${count++}`;
    }, 500)
);