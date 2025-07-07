console.log('start');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let button = document.createElement('button');
        button.setAttribute('class', 'button button-success');
        button.innerText = 'do';
        document.body.appendChild(button);
    })
console.log('end');

let button = document.getElementsByClassName('button-success')[0];
