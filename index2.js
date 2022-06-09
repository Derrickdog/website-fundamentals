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

// Prototypes
function Student(name, grade){
    this.name = name;
    this.grade = grade;
}

Student.prototype.sayName = function() {
    console.log(this.name);
}
Student.prototype.goToProm = function(){
    console.log("Want to go to prom with me?");
}

const student1 = new Student("Derrick", 12);
student1.goToProm();

// Create Prototype
function SeventhGrader(name) {
    this.name = name;
    this.grade = 7;
}

SeventhGrader.prototype = Object.create(Student.prototype);

const carl = new SeventhGrader("Carl");
carl.sayName();
console.log(carl.grade);