class LibraryMember{
    public  memberID : number;
    private borrowedBooks : String;
     protected  membershipType : String;

     constructor(memberID : number,borrowedBooks : String,membershipType : String){
        this.memberID=memberID;
        this.borrowedBooks=borrowedBooks;
        this.membershipType=membershipType;
     }

        public borrowBook(book: string): void {
    this.borrowedBooks;
        }

        public getBorrowedCount(): number {
    return this.borrowedBooks.length; 
  }
  public getMemberInfo(): string {
    return `VIP Member ID: ${this.memberID}, Type: ${this.membershipType}`;
  }



}


const member = new LibraryMember(1001,"hamlet","standard");
console.log(member.memberID);

member.borrowBook("TypeScript Handbook");
console.log(member.getBorrowedCount());

// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ tsc Q1.ts 
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ tsc QB.ts 
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ node QB.js 
// 1001
// 6
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ 




