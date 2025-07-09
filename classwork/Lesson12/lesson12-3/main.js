// setTimeout(() => {
//     console.log('asd');
// }, 2000); //2
//
// setTimeout(() => {
//     console.log('qwe');
// }, 1000); //1

// console.log('log1');
//
// setTimeout(() => console.log('asd'), 2000);
// console.log('log2');
//
// setTimeout(() => console.log('qwe'), 1000);
// console.log('log3');
//
// let x = 0;
//
// setTimeout(() => {
//     x = 100500;
// }, 1000);
//
// console.log(x);

let i = 0;

// while (i < 5) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
//     i++;
// }

while (i < 5) {
    run(i);
    i++;
}

function run(i) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
