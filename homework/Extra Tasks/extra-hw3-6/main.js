let books = [
    {
        title: "The Silent Patient",
        pages: 336,
        authors: ["Alex Michaelides"],
        genres: ["Thriller", "Mystery"]
    },
    {
        title: "Good Omens",
        pages: 432,
        authors: ["Neil Gaiman", "Terry Pratchett"],
        genres: ["Fantasy", "Comedy"]
    },
    {
        title: "Educated",
        pages: 352,
        authors: ["Tara Westover"],
        genres: ["Memoir"]
    },
    {
        title: "The Midnight Library",
        pages: 304,
        authors: ["Matt Haig"],
        genres: ["Fantasy", "Philosophical Fiction"]
    },
    {
        title: "Becoming",
        pages: 448,
        authors: ["Michelle Obama"],
        genres: ["Biography", "Inspiration"]
    },
    {
        title: "Sapiens",
        pages: 498,
        authors: ["Yuval Noah Harari"],
        genres: ["Non-fiction", "History", "Science"]
    },
    {
        title: "The Testaments",
        pages: 419,
        authors: ["Margaret Atwood"],
        genres: ["Dystopia", "Drama"]
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        pages: 224,
        authors: ["Douglas Adams"],
        genres: ["Science Fiction", "Comedy"]
    },
    {
        title: "The Book Thief",
        pages: 552,
        authors: ["Markus Zusak"],
        genres: ["Historical Fiction"]
    },
    {
        title: "American Gods",
        pages: 635,
        authors: ["Neil Gaiman"],
        genres: ["Fantasy", "Adventure"]
    }
];

let maxPages = books[0].pages;
for (let i = 1; i < books.length; i++) {
    if (books[i].pages > maxPages) {
        maxPages = books[i].pages;
    }
}
console.log(maxPages);

let maxGenres = books[0].genres.length;
let bookMostGenres = books[0];

for (let i = 1; i < books.length; i++) {
    if (books[i].genres.length > maxGenres) {
        maxGenres = books[i].genres.length;
        bookMostGenres = books[i];
    }
}
console.log(bookMostGenres);


let longTitle = books[0].title;
let bookWithLongestTitle = books[0];

for (let i = 1; i < books.length; i++) {
    if (books[i].title.length > longTitle.length) {
        longTitle = books[i].title;
        bookWithLongestTitle = books[i];
    }
}

console.log(longTitle);

for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 2) {
        console.log(books[i].authors);
    }

}

for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        console.log(books[i].authors);
    }

}








