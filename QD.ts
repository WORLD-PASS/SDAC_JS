class Boook {
  constructor(public itemID: string, public title: string, public author: string) {}
}

class LibraryMemberr {
  constructor(public memberID: string, public membershipType: string) {}
}

function searchItem<T>(items: T[], condition: (item: T) => boolean): T | undefined {
  return items.find(condition);
}


const bookCatalog: Boook[] = [
  new Boook("B-001", "Clean Code", "Robert C. Martin"),
  new Boook("B-002", "The Pragmatic Programmer", "Andrew Hunt"),
  new Boook("B-003", "Design Patterns", "Erich Gamma")
];

const memberRegistry: LibraryMemberr[] = [
  new LibraryMemberr("M-1001", "Standard"),
  new LibraryMemberr("M-1002", "VIP"),
  new LibraryMemberr("M-1003", "Standard")
];

const foundBook = searchItem(bookCatalog, (book) => book.title === "The Pragmatic Programmer");
console.log("Found Book:", foundBook);

const foundMember = searchItem(memberRegistry, (member) => member.memberID === "M-1002");
console.log("Found Member:", foundMember);

// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ node QD.js 
// Found Book: Boook {
//   itemID: 'B-002',
//   title: 'The Pragmatic Programmer',
//   author: 'Andrew Hunt'
// }
// Found Member: LibraryMemberr { memberID: 'M-1002', membershipType: 'VIP' }
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ 