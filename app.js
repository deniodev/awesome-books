import Book from './book.js';
import Display from './display.js';
import Store from './store.js';

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