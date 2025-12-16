const myLibrary = [];

// Book Object Constructor
function Book(title, writer, genre){
    this.id = crypto.randomUUID();
    this.title = title;
    this.writer = writer;
    this.genre = genre;
}

const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", "Fantasy, Fiction");
const book2 = new Book("The Hobbit", "J. R. R. Tolkien", "Fantasy, Fiction");
const book3 = new Book("1984", "George Orwell", "Dystopian, Science Fiction");
const book4 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction, Classic");
const book5 = new Book("Pride and Prejudice", "Jane Austen", "Romance, Classic");

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
        img.src = "no-image-found.png";
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

        card.appendChild(info);
        books.appendChild(card);
    }
}

renderBooks();

