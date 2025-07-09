// console.log('1');
// // console.log('start1');
// // console.log('start2');
// // console.log('start3');
// setTimeout(function () {
//     console.log("Hi");
// }, 1000);
//
// setTimeout(function () {
//     console.log("Hello");
// }, 200);
//
// // setTimeout(function () {
// //     console.log("Hi1");
// //     setTimeout(function () {
// //         console.log("Hi2");
// //         setTimeout(function () {
// //             console.log("Hi3");
// //             setTimeout(function () {
// //                 console.log("Hi4");
// //             }, 1000);
// //         }, 1000);
// //     }, 1000);
// // }, 1000);
//
// console.log('2');

let x = 1;

for (let i = 0; i < 10000; i++) {

}

setTimeout(function () {
    x = 1000;
}, 1);
console.log(x); //x буде 1, а не 1000



