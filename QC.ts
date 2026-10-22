class LibraryItem {
  itemID: string;
  title: string;

  constructor(itemID: string, title: string) {
    this.itemID = itemID;
    this.title = title;
  }

  public displayInfo(): string {
    return `Item ID: ${this.itemID}, Title: ${this.title}`;
  }
}

class Bookk extends LibraryItem {
  author: string;
  pageCount: number;

  constructor(itemID: string, title: string, author: string, pageCount: number) {
    super(itemID, title);
    this.author = author;
    this.pageCount = pageCount;
  }

  public displayInfo(): string {
    return `[Book2] ID: ${this.itemID}, Title: ${this.title}, Author: ${this.author}, Pages: ${this.pageCount}`;
  }
}

class Magazine extends LibraryItem {
  issueNumber: number;
  publisher: string;

  constructor(itemID: string, title: string, issueNumber: number, publisher: string) {
    super(itemID, title);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }

  public displayInfo(): string {
    return `[Magazine] ID: ${this.itemID}, Title: ${this.title}, Issue: #${this.issueNumber}, Publisher: ${this.publisher}`;
  }
}


const items: LibraryItem[] = [
  new Bookk("B-001", "Clean Code", "Robert C. Martin", 464),
  new Magazine("M-502", "National Geographic", 215, "Partners")
];

items.forEach(item => {
  console.log(item.displayInfo());
});



// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ tsc QC.ts 
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ node QC.js 
// [Book2] ID: B-001, Title: Clean Code, Author: Robert C. Martin, Pages: 464
// [Magazine] ID: M-502, Title: National Geographic, Issue: #215, Publisher: Partners
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ 