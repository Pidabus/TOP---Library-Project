const container = document.querySelector(".container");

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
        const booksContainer = document.createElement("p"); // This is placed inside the loop so each book created receives it's own container.
        booksContainer.classList.add("bookCard");

        booksContainer.innerText += `Title: ${libraryArray[book].title}
                           Author: ${libraryArray[book].author}\n\n`;

        container.appendChild(booksContainer);
    }
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien");
addBookToLibrary("The Return of The King", "J.R.R Tolkien");
addBookToLibrary("The Five Armies", "J.R.R Tolkien");

displayLibrary(myLibrary);