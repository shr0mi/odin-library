const myLibrary = [];

// Book Object Constructor
function Book(title, writer, genre, poster_url){
    this.id = crypto.randomUUID();
    this.title = title;
    this.writer = writer;
    this.genre = genre;
    this.poster_url = poster_url || "no-image-found.png";
}

const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", "Fantasy, Fiction", "");
const book2 = new Book("The Hobbit", "J. R. R. Tolkien", "Fantasy, Fiction", "");
const book3 = new Book("1984", "George Orwell", "Dystopian, Science Fiction", "");
const book4 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction, Classic", "");
const book5 = new Book("Pride and Prejudice", "Jane Austen", "Romance, Classic", "");

myLibrary.push(book1, book2, book3, book4, book5);

console.log(myLibrary);

// Render Books to DOM
const books = document.querySelector(".books");

function renderBooks(){
    // First clear existing books
    books.innerHTML = "";

    for(let book of myLibrary){
        // Create Card
        const card = document.createElement("div");
        card.classList.add("card");

        // Create Image
        const img = document.createElement("img");
        img.src = book.poster_url;
        img.alt = "book cover";
        card.appendChild(img);

        // Create Info
        const info = document.createElement("div");
        info.classList.add("info");

        const title = document.createElement("h4");
        title.textContent = book.title;
        info.appendChild(title);

        const writer = document.createElement("p");
        writer.textContent = `Author: ${book.writer}`;
        info.appendChild(writer);

        const genre = document.createElement("p");
        genre.textContent = `Genre: ${book.genre}`;
        info.appendChild(genre);

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", ()=>{
            for(let i=0; i<myLibrary.length; i++){
                if(myLibrary[i].id === book.id){
                    myLibrary.splice(i, 1);
                    renderBooks();
                    break;
                }
            }
        });
        info.appendChild(deleteBtn);

        card.appendChild(info);
        books.appendChild(card);
    }
}

renderBooks();


// Show Add Book Dialog
const dialog = document.querySelector(".form-dialog");
const showDialogBtn = document.querySelector("#dialog-btn");
const closeBtn = document.querySelector("#closeBtn");

showDialogBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeBtn.addEventListener("click", () => {
    dialog.close();
});


// Form Submission
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const genreInput = document.querySelector("#genre");
const coverInput = document.querySelector("#cover");
const submitBtn = document.querySelector("#submitBtn");

const form = document.querySelector("#form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const newBook = new Book(
        titleInput.value,
        authorInput.value,
        genreInput.value,
        coverInput.value
    );

    myLibrary.push(newBook);
    renderBooks();
    form.reset();
    dialog.close();
});


