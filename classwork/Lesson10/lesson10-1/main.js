let target = document.getElementById('target');
// target.onclick = function (event) {
//     console.log('cklick');
//     console.log(event);
// };

// target.onmousemove = function (event) {
//     console.log('mousemove');
//     console.log(event.clientX, event.clientY);
//     let r = event.clientX;
//     let g = event.clientX;
//     let b = event.clientY;
//     this.style.background = `rgb(${r}, ${g}, ${b})`;
// };

// target.onclick = function (event) {
//     console.log('dfghjkl');
// };
//
// console.log(target);

// target.addEventListener('click', function (event) {
//     console.log(event);
// })

// target.onmouseover = function (event) {
//     console.log('mouseover');
// };
//
// target.onmouseleave = function (event) {
//     console.log('mouseleave');
// }

// let i1 = document.getElementById("i1");
// i1.oninput = function () {
//     target.innerText = this.value;
// };

let f1 = document.forms.f1;

f1.onsubmit = function (event) {
    event.preventDefault();
    console.log('hello');
    let user = {name: this.username.value}  //замість this можна була взяти f1
    console.log(user); //ls fetch api
};

//якщо б ставили event на button

let button = document.getElementsByTagName('button')[0];
button.onclick = function () {
    let value = f1.username.value;
    //...
};

window.onload = function () {
    console.log('load');
};

document.onreadystatechange = function () {
    if(document.readyState === 'interactive') {
        document.body.innerText = 'loading start ...'
    }
    if(document.readyState === 'complete') {
        document.body.innerText = 'loading complete'
    }
};
