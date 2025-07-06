let userForm = document.forms.userForm;

userForm.addEventListener( 'submit', function (event) {
    event.preventDefault();
    const userName = userForm.firstName.value;
    const userSurname = userForm.lastName.value;
    const userAge = +userForm.age.value;

    let user = {userName, userSurname, userAge};
    console.log(user);

    let p = document.createElement('p');
    p.innerHTML = user.userName + ' ' + userSurname + ' ' + userAge;

    document.body.appendChild(p);
})
