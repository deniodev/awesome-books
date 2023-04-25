import Store from './store.js';

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

export default Display;