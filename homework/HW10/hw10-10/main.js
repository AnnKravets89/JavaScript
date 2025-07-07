const items = Array.from({length: 100}, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`
}));
console.log(items);

const itemsPerPage = 10;
let currentPage = 0;

const dataDiv = document.getElementById('data');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderPage() {
    dataDiv.innerText = ' ';
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    const visibleItems = items.slice(start, end);

    visibleItems.forEach(item => {
        const div = document.createElement('div');
        div.innerText = `${item.name}`;
        dataDiv.appendChild(div);
    })
}

prevBtn.addEventListener('click', () => {
    if(currentPage > 0) {
        currentPage--;
        renderPage();
    }
})

nextBtn.addEventListener('click', () => {
    if((currentPage + 1) * itemsPerPage < items.length) {
        currentPage++;
        renderPage();
    }
})
renderPage();




