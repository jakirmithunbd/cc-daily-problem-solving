const getName = {
    fullName: function() {
        return `${this.name} ${this.age}`;
    }
}

const person1 = {
    name: "Jakir",
    age: 31
}

const person2 = {
    name: "Rakib",
    age: 30
}

console.log(getName.fullName.bind(person1)());
console.log(getName.fullName.call(person2));

