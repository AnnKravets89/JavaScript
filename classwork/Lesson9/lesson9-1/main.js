//DOM
// console.log(document);
// console.log(document.head.innerHTML);
// console.log(document.head.children);
// console.log(document.body.innerHTML);


//ID

// let ul1 = document.getElementById('list-1');
// console.log(ul1);

//class

// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement);
// }

//TAG

// let liList = document.getElementsByTagName('li');
// console.log(liList);

// let list1 = document.getElementById('list-1');
// console.log(list1);
// let listLiCollection = list1.getElementsByTagName('li');
// console.log(listLiCollection);

// console.log(document.querySelector('body .menu'));
// console.log(document.querySelectorAll('body .menu'));

console.log(document.querySelectorAll('#list-2 > li')); //by id
console.log(document.querySelectorAll('.menu:nth-last-child(2) > li')); //by class

let  nodeListOf = document.querySelectorAll('.menu:nth-last-child(2) > li');
console.log(nodeListOf);

for(const node of nodeListOf) {
    console.log(node);
}
