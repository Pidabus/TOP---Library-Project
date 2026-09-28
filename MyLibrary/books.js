const container = document.querySelector(".container");
const formButton = document.querySelector("#submissionButton");

let myLibrary = [];

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
    container.innerText = "";
    for (let book in libraryArray) {
        const booksContainer = document.createElement("p"); // This is placed inside the loop so each book created receives it's own container.
        booksContainer.classList.add("bookCard"); // ==> This links the html to it's css

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.dataset.id = libraryArray[book].id;

        booksContainer.innerText = `Title: ${libraryArray[book].title}
                           Author: ${libraryArray[book].author}
                           Pages: ${libraryArray[book].pages}\n\n`;

        deleteButton.addEventListener("click", (e) =>{
            const itemId = e.target.dataset.id;

            myLibrary = myLibrary.filter(item => item.id !== itemId);

            displayLibrary(myLibrary);
        });

        booksContainer.appendChild(deleteButton);
        container.appendChild(booksContainer);
    }
}

const titleInput = document.querySelector("#book_title");
const authorInput = document.querySelector("#book_author");
const pagesInput = document.querySelector("#book_pages");

formButton.addEventListener("click", (e) => {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value);

    displayLibrary(myLibrary);

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
})
