//– Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let mixedSimple = [];
    mixedSimple[0] = 10;
    mixedSimple[1] = 'JavaScript';
    mixedSimple[2] =  true;
    mixedSimple[3] = 25;
    mixedSimple[4] = 'code';
    mixedSimple[5] =false;
    mixedSimple[6] = 88;
    mixedSimple[7] = 'hello';
    mixedSimple[8] = true;
    mixedSimple[9] = 'world';
for (let item of mixedSimple) {
    console.log(item);
}

//– Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

//– Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

//– Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 200; i+= 2) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

//– Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<h2>${i}</h2>`);
    }
}

//– Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`<h2>${i}</h2>`);
//     }
//
// }
