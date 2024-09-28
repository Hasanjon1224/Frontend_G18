"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Books = /** @class */ (function () {
    function Books(title, author, isbn, publicationYear) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publicationYear = publicationYear;
    }
    return Books;
}());
var BooksGroups = /** @class */ (function () {
    function BooksGroups(name) {
        this.name = name;
        this.books = [];
    }
    BooksGroups.prototype.addBook = function (book) {
        this.books.push(book);
    };
    BooksGroups.prototype.removeBook = function (isbn) {
        this.books = this.books.filter(function (book) { return book.isbn !== isbn; });
    };
    BooksGroups.prototype.updateBook = function (isbn, updatedBook) {
        var book = this.books.find(function (book) { return book.isbn === isbn; });
        if (book) {
            Object.assign(book, updatedBook);
        }
    };
    BooksGroups.prototype.findBook = function (isbn) {
        return this.books.find(function (book) { return book.isbn === isbn; });
    };
    return BooksGroups;
}());
// Readonly bo'lgan object
var readonlyBooks = new Books("1984", "George Orwell", "123456789", 1949);
// Record turidagi object
var bookRecord = {
    "123456789": new Books("1984", "George Orwell", "123456789", 1949),
    "987654321": new Books("To Kill a Mockingbird", "Harper Lee", "987654321", 1960),
};
var book1 = new Books("1984", "George Orwell", "123456789", 1949);
var book2 = new Books("To Kill a Mockingbird", "Harper Lee", "987654321", 1960);
var classics = new BooksGroups("Classics");
classics.addBook(book1);
classics.addBook(book2);
// Kitobni yangilash
classics.updateBook("123456789", { title: "Nineteen Eighty-Four" });
// Kitobni olib tashlash
classics.removeBook("987654321");
// Kitobni qidirish
var foundBook = classics.findBook("123456789");
console.log(foundBook);
