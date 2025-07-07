let table = document.getElementById("tableGenerate");

let tableGeneratorForm = document.forms['tableGenerateForm'];

tableGeneratorForm.onsubmit = function (event) {
    table.innerText = ' ';
    event.preventDefault();
    const inputLines = tableGeneratorForm.lines.value;
    const inputColumns = tableGeneratorForm.columns.value;
    const inputInfo = tableGeneratorForm.info.value;

    for(let i = 0; i < inputLines; i++) {
        const tr = document.createElement("tr");
        for(let j = 0; j < inputColumns; j++ ) {
            const td = document.createElement("td");
            td.innerText = inputInfo;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};
