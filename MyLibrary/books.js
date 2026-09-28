const myLibrary = [];

function Book(title, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    myLibrary.push(bookName);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien");
addBookToLibrary("LOTR 1", "J.R.R Tolkien");
addBookToLibrary("Smaug", "J.R.R Tolkien");
console.log(myLibrary);