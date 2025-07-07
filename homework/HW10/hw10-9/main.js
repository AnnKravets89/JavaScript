let block = document.getElementsByClassName('block')[0];

let currencyCounter = parseInt(localStorage.getItem('currency')) || 100;
let lastUpdate = parseInt(localStorage.getItem('updateTime'));
let now = Date.now();

if(!lastUpdate || now - lastUpdate >= 10000) {
    currencyCounter += 10;
    localStorage.setItem('currency', currencyCounter);
    localStorage.setItem('updateTime', now);
}

block.innerText = `${currencyCounter} грн`;
