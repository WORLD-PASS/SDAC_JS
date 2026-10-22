class Book{
   
    BookID : number;
    title : String;
    author : String;
    isAvailable : boolean;

    constructor(BookID : number,title : String,author : String,isAvailable : boolean){
        this.title = title;
        this.BookID=BookID;
        this.author=author;
        this.isAvailable=isAvailable;
    }

    displayBook(){
        console.log("Book Title:"+this.title);
        console.log("Book ID details: "+this.BookID);
        console.log("Book Author: "+this.author);
        console.log(("Is Book Avilable: "+ this.isAvailable));
        
        
        
    }
}


const Book1 = new  Book(1001,"hamlet","william Shakespear",true);
const Book2 = new  Book(1002,"twinknight","william Shakespear",false);
const Book3 = new  Book(1003,"Harry Potter","deo nazzo",true);


Book1.displayBook();
console.log("------------------------------");

Book2.displayBook();
console.log("------------------------------");

Book3.displayBook();

console.log("------------------------------");


// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ tsc Q1.ts 
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ node Q1.js 
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ node Q1.js 
// Book Title:hamlet
// Book ID details: 1001
// Book Author: william Shakespear
// Is Book Avilable: true
// ------------------------------
// Book Title:twinknight
// Book ID details: 1002
// Book Author: william Shakespear
// Is Book Avilable: false
// ------------------------------
// Book Title:Harry Potter
// Book ID details: 1003
// Book Author: deo nazzo
// Is Book Avilable: true
// ------------------------------

