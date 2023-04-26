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

const list = document.querySelector('.list');
const addNew = document.querySelector('.form-inputs');
const contact = document.querySelector('.contact');
const allbooks = document.querySelector('#all-books');
const addbooks = document.querySelector('#add-new-books');
const contactUs = document.querySelector('#contact');

list.addEventListener('click', () => {
  addbooks.classList.add('active');
  contactUs.classList.add('active');
  allbooks.classList.remove('active');
});

addNew.addEventListener('click', () => {
  addbooks.classList.remove('active');
  contactUs.classList.add('active');
  allbooks.classList.add('active');
});

contact.addEventListener('click', () => {
  contactUs.classList.remove('active');
  addbooks.classList.add('active');
  allbooks.classList.add('active');
});

window.addEventListener('load', () => {
  addbooks.classList.add('active');
  contactUs.classList.add('active');
  allbooks.classList.remove('active');
});