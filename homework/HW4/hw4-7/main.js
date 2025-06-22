function createList(item,count) {
    document.write('<ul>')
    for (let i = 0;i < count;i ++) {
        document.write(`              
                        <li>${item}</li>
                 `)
    }
    document.write('</ul>')
}
createList('Have A Nice Day!', 10);
