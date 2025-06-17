
//– Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [4, 7, 12, 19, 25, 31, 42, 53, 60, 78];

for (let number of numbers) {
    console.log(number);
}

//– Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango', 'peach'];

for (let fruit of fruits) {
    console.log(fruit);
}

//– Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixedArray = [
    42,
    'hello',
    true,
    null,
    undefined,
    { name: 'Alice' },
    [1, 2, 3],
    3457,
    3.14,
    false
];
for (let i of mixedArray) {
    console.log(i);
}

//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mixedSimple = [
    10,
    'JavaScript',
    true,
    25,
    'code',
    false,
    88,
    'hello',
    true,
    'world'
];
for (let item of mixedSimple) {
    if (typeof item === 'boolean') {
        console.log(item);
    }
}

//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let item of mixedSimple) {
    if (typeof item === 'number') {
        console.log(item);
    }
}

//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let item of mixedSimple) {
    if (typeof item === 'string') {
        console.log(item);
    }
}
