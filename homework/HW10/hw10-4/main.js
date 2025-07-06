let counter = +localStorage.getItem('number');
counter += 1;

localStorage.setItem('number', counter);
let block = document.getElementsByClassName('block')[0];
block.innerText = counter;
