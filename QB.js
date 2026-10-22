var LibraryMember = /** @class */ (function () {
    function LibraryMember(memberID, borrowedBooks, membershipType) {
        this.memberID = memberID;
        this.borrowedBooks = borrowedBooks;
        this.membershipType = membershipType;
    }
    LibraryMember.prototype.borrowBook = function (book) {
        this.borrowedBooks;
    };
    LibraryMember.prototype.getBorrowedCount = function () {
        return this.borrowedBooks.length;
    };
    LibraryMember.prototype.getMemberInfo = function () {
        return "VIP Member ID: ".concat(this.memberID, ", Type: ").concat(this.membershipType);
    };
    return LibraryMember;
}());
var member = new LibraryMember(1001, "hamlet", "standard");
console.log(member.memberID);
member.borrowBook("TypeScript Handbook");
console.log(member.getBorrowedCount());
