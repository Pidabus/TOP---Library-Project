const container = document.querySelector(".container");
const formButton = document.querySelector("#submissionButton");

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function displayLibrary(libraryArray) {
    for (let book in libraryArray) {
        const booksContainer = document.createElement("p"); // This is placed inside the loop so each book created receives it's own container.
        booksContainer.classList.add("bookCard");

        booksContainer.innerText += `Title: ${libraryArray[book].title}
                           Author: ${libraryArray[book].author}
                           Pages: ${libraryArray[book].pages}\n\n`;

        container.appendChild(booksContainer);
    }
}

const titleInput = document.querySelector("#book_title");
const authorInput = document.querySelector("#book_author");
const pagesInput = document.querySelector("#book_pages");

formButton.addEventListener("click", (e) => {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value);

    displayLibrary(myLibrary);
})
