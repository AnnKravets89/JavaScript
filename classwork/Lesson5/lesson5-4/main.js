// function asd() {
//     let x = 10;
//
//     function inner() {
//         return ++x;
//     }
//     return inner;
// }
// let foo = asd();
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());

// let user = {name: 'John', age: 123};
// user.age = -100500;

function userBuilding(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        }
    }
}
let builder = userBuilding('Ann', 35);
console.log(builder);
console.log(builder.getName());
console.log(builder.getAge());
builder.setAge(100);
console.log(builder.getAge());
