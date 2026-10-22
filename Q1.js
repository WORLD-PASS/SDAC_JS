var Book = /** @class */ (function () {
    function Book(BookID, title, author, isAvailable) {
        this.title = title;
        this.BookID = BookID;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    Book.prototype.displayBook = function () {
        console.log("Book Title:" + this.title);
        console.log("Book ID details: " + this.BookID);
        console.log("Book Author: " + this.author);
        console.log(("Is Book Avilable: " + this.isAvailable));
    };
    return Book;
}());
var Book1 = new Book(1001, "hamlet", "william Shakespear", true);
var Book2 = new Book(1002, "twinknight", "william Shakespear", false);
var Book3 = new Book(1003, "Harry Potter", "deo nazzo", true);
Book1.displayBook();
console.log("------------------------------");
Book2.displayBook();
console.log("------------------------------");
Book3.displayBook();
console.log("------------------------------");
