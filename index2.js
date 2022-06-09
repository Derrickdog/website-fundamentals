// Object Constructors
function Book(title, author, numPages, haveRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
    this.info = function() {
        let haveReadString;
        if(haveRead)
            haveReadString = "read";
        else
            haveReadString = "not read yet";
        return title + " by " + author + ", " + numPages + " pages, " + haveReadString;
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(book1.info());

