const container = document.querySelector(".container");
const booksContainer = document.createElement("p");
booksContainer.classList.add("bookCard");

const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;   
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author) {
    let newBook = new Book(title, author);
    myLibrary.push(newBook);
}

function displayLibrary(libraryArray) {
    for (let book in libraryArray) {
        booksContainer.innerText += `Title: ${libraryArray[book].title}
                           Author: ${libraryArray[book].author}\n\n`;

        container.appendChild(booksContainer);
    }
    console.log(myLibrary);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien");
addBookToLibrary("The Return of The King", "J.R.R Tolkien");
addBookToLibrary("The Five Armies", "J.R.R Tolkien");

displayLibrary(myLibrary);