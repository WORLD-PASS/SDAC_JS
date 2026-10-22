var Boook = /** @class */ (function () {
    function Boook(itemID, title, author) {
        this.itemID = itemID;
        this.title = title;
        this.author = author;
    }
    return Boook;
}());
var LibraryMemberr = /** @class */ (function () {
    function LibraryMemberr(memberID, membershipType) {
        this.memberID = memberID;
        this.membershipType = membershipType;
    }
    return LibraryMemberr;
}());
// Generic search function that accepts an array of type T and a predicate condition
function searchItem(items, condition) {
    return items.find(condition);
}
// --- Demonstration ---
var bookCatalog = [
    new Boook("B-001", "Clean Code", "Robert C. Martin"),
    new Boook("B-002", "The Pragmatic Programmer", "Andrew Hunt"),
    new Boook("B-003", "Design Patterns", "Erich Gamma")
];
var memberRegistry = [
    new LibraryMemberr("M-1001", "Standard"),
    new LibraryMemberr("M-1002", "VIP"),
    new LibraryMemberr("M-1003", "Standard")
];
var foundBook = searchItem(bookCatalog, function (book) { return book.title === "The Pragmatic Programmer"; });
console.log("Found Book:", foundBook);
var foundMember = searchItem(memberRegistry, function (member) { return member.memberID === "M-1002"; });
console.log("Found Member:", foundMember);
