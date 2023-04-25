const addBookBtn = document.querySelector('.add-book-button');
const bookList = document.querySelector('#book-list');

let books = [];

const displayBooks = () => {
  const book = localStorage.getItem('book');
  if (book === null) {
    books = [];
  } else {
    books = JSON.parse(book);
  }
  let listOfbook = '';
  books.forEach((item, index) => {
    listOfbook += `<div>
    <p class="name-of-book">${item.title}</p>
    <p class="author-of-book">${item.author}</p>
    <button type="button" class="remove-book-button" id="${index}" onclick="removeBook(${index})">Remove</button>
    <hr>
    </div>`;
  });
  bookList.innerHTML = listOfbook;
};

function clearField() {
  const title = document.getElementById('name-of-book');
  const author = document.getElementById('author-of-book');

  title.value = '';
  author.value = '';
}

function AddBooks(title, author) {
  const book = localStorage.getItem('book');
  if (book === null) {
    books = [];
  } else {
    books = JSON.parse(book);
  }
  books.push(
    {
      title,
      author,
    },
  );
  localStorage.setItem('book', JSON.stringify(books));
  clearField();
  displayBooks();
}

addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('name-of-book').value;
  const author = document.getElementById('author-of-book').value;
  if (title && author !== '') {
    AddBooks(title, author);
  }
});

function removeBook(index) {
  const book = localStorage.getItem('book');
  books = JSON.parse(book);
  books.splice(index, 1);
  localStorage.setItem('book', JSON.stringify(books));
  displayBooks();
}
const removeBtn = document.querySelectorAll('div button');
if (removeBtn.length > 0) {
  removeBtn.forEach((e) => e.addEventListener('click', (e) => {
    removeBook(e.target.id);
  }));
}
displayBooks();