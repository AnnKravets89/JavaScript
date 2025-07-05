let myForm = document.forms.myForm;

myForm.onsubmit = function (event) {
    let user = this.age.value;
    if (user < 18) {
        event.preventDefault();

        let msg = document.createElement('p');
        msg.innerText = 'you are not 18 years old';
        msg.style.color = 'red';

        document.body.appendChild(msg);
    }
}
