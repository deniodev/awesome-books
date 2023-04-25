// Declare the Book class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Declare the Display Class
class Display {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
      Display.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const newBook = document.createElement('div');
    list.appendChild(newBook);
    newBook.className = 'my-book';
    newBook.innerHTML = `<div class="book-name-and-author">
    <p>${book.title}</p> <span>by</span>
    <p>${book.author}</p></div>
    <button class="remove-book-button">Remove</button></div>`;
  }

  static removeBook(book) {
    if (book.classList.contains('remove-book-button')) {
      book.parentElement.remove();
    }
  }

  static clearInputs() {
    document.getElementById('name-of-book').value = '';
    document.getElementById('author-of-book').value = '';
  }
}

// Preserve data in a browser using LocalStorage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    //
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static deleteBook(title) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', Display.displayBooks);

// Add Book Event Listener
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const nameOfBookField = document.querySelector('#name-of-book').value;
  const authorOfBookField = document.querySelector('#author-of-book').value;

  if (nameOfBookField === '' || authorOfBookField === '') {
    return;
  }
  const book = new Book(nameOfBookField, authorOfBookField);

  Display.addBookToList(book);

  Store.addBook(book);

  Display.clearInputs();
});

const bookList = document.getElementById('book-list');
// Remove Book event Listener
bookList.addEventListener('click', (e) => {
  Display.removeBook(e.target);

  Store.deleteBook(e.target.previousElementSibling.firstElementChild.textContent);
});
