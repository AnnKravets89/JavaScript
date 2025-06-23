let user = {
    name: 'John',
    age: 31,
    greeting: function (msg) {
        return `${msg} my name is ${this.name}`;
    },
    vitanny: (msg) => `${msg} my age is ${user.age}`
}
console.log(user.greeting('Hi'));
console.log(user.vitanny('Hello'));
