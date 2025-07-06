let kgInput = document.getElementById("kgInput");
let output = document.getElementById("output");
let value = 2.2046;

kgInput.addEventListener('input', () => {
    const kg = +kgInput.value;
    const pound = kg * value;
        output.innerText = pound.toFixed(1);

})
