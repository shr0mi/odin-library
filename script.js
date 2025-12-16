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