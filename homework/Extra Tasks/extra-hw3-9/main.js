let randomArray = [
    42,
    "banana",
    true,
    null,
    [3, 5, 7],
    { name: "Olena", age: 28 },
    false,
    "coffee",
    99,
    { product: "book", price: 120 }
];

let newArr = new Array(randomArray.length);
let count = 0;
for (let i = 0; i < randomArray.length; i++) {
    if (typeof randomArray[i] === "number") {
        newArr[count] = randomArray[i];
        count++;
    }
}
newArr.length = count;
console.log(newArr);
