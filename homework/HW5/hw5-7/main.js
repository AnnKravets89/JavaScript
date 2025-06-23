let createList = (item, count) => {
    document.write('<ul>')
    for (let i = 0; i < count; i++) {
        document.write(`              
                        <li>${item}</li>
                 `)
    }
    document.write('</ul>')
}
createList('I was dancing in the rain', 10);
