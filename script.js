//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
//getSummary prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
}

const book1 = new Book('Book One', 'Jane Doe', '2005');
const book2 = new Book('Book Two', 'John Doe', '2004');

console.log(book1.getSummary());
console.log(book1);
console.log(book1.getAge());
console.log(book2.getAge());