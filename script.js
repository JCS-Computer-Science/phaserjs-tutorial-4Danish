//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
//getSummary prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
//magazine constructor
function Magazine(title, author, year,month){
    Book.call(this, title, author, year);

    this.month = month;
}
//Inheriting Prototype
Magazine.prototype = Object.create(Book.prototype);
//Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Aug');
//Magazine Constructor
Magazine.prototype.constructor = Magazine;
//console logging
console.log(mag1.getSummary());
console.log(mag1);
//at 26:03 of CrashCourse Video OOP
