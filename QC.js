var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LibraryItem = /** @class */ (function () {
    function LibraryItem(itemID, title) {
        this.itemID = itemID;
        this.title = title;
    }
    LibraryItem.prototype.displayInfo = function () {
        return "Item ID: ".concat(this.itemID, ", Title: ").concat(this.title);
    };
    return LibraryItem;
}());
var Bookk = /** @class */ (function (_super) {
    __extends(Bookk, _super);
    function Bookk(itemID, title, author, pageCount) {
        var _this = _super.call(this, itemID, title) || this;
        _this.author = author;
        _this.pageCount = pageCount;
        return _this;
    }
    Bookk.prototype.displayInfo = function () {
        return "[Book2] ID: ".concat(this.itemID, ", Title: ").concat(this.title, ", Author: ").concat(this.author, ", Pages: ").concat(this.pageCount);
    };
    return Bookk;
}(LibraryItem));
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(itemID, title, issueNumber, publisher) {
        var _this = _super.call(this, itemID, title) || this;
        _this.issueNumber = issueNumber;
        _this.publisher = publisher;
        return _this;
    }
    Magazine.prototype.displayInfo = function () {
        return "[Magazine] ID: ".concat(this.itemID, ", Title: ").concat(this.title, ", Issue: #").concat(this.issueNumber, ", Publisher: ").concat(this.publisher);
    };
    return Magazine;
}(LibraryItem));
var items = [
    new Bookk("B-001", "Clean Code", "Robert C. Martin", 464),
    new Magazine("M-502", "National Geographic", 215, "Partners")
];
items.forEach(function (item) {
    console.log(item.displayInfo());
});
