// let target = document.getElementById("target");
// console.log(target.innerText);
// // target.innerText = 'okten';
// target.style.background = 'blue';
// // console.log(target.classList);
// // target.classList.add('foo');
// // target.classList.add('bar');
// // console.log(target.classList.item(0));
// // console.log(target.classList.contains('bar'));
// // target.classList.toggle('cool');
//
// console.log(target.getAttribute('id'));
// // target.setAttribute('id', 'grif');
//
// console.log(target.previousElementSibling);
// console.log(target.nextElementSibling);
// console.log(target.children);
// console.log(target.childNodes);
// // target.innerHTML = '<b>Cacamalaca</b>';
// console.log(target.outerHTML);

let collectionOfDiv = document.getElementsByClassName('point');

for (const divElement of collectionOfDiv) {
    console.log(divElement.innerText = 'good bye');
   divElement.classList.add('good-class');

}
