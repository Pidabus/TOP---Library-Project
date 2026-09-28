const myLibrary = [];

function Book(title, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    myLibrary.push(bookName);
}

function displayLibrary(libraryArray) {
    for (let book in libraryArray) {
        books.innerText = `Title: ${book.title}
                           Author: ${book.author}`;
    }
}

const container = document.querySelector(".container");
const books = document.createElement("p");
books.classList.add("bookCard");

