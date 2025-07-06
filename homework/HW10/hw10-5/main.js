let sessions = JSON.parse(localStorage.getItem('sessionsList')) || [];

const today = new Date();
const sessionTime = today.toLocaleString();
sessions.push(sessionTime);

localStorage.setItem('sessionsList', JSON.stringify(sessions));

if(location.pathname.includes('sessionListPage.html')) {
    let h1 = document.createElement('h1');
    h1.innerText = 'Visit history';

    let ul = document.createElement('ul');

    sessions.forEach((session) => {
        let li = document.createElement('li');
        li.innerText = session;
        ul.appendChild(li);

    })

    document.body.append(h1, ul);
}
