function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book('Book One', 'Jane Doe', '2005');

console.log(book1.author);