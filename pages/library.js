let myLibrary = [];

function Book(title, author, numPages, haveRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

Book.prototype.getInfo = function() {
    let haveReadString;
    (this.haveRead) ? haveReadString = "read" : haveReadString = "not read yet";
    return this.title + " by " + this.author + ", " + this.numPages + " pages, " + haveReadString;
}

// const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(book1.getInfo());

function addBookToLibrary(){
    
}