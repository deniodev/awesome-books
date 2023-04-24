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
    <button class="remove-book-button" onclick="removeBook(${index})">Remove</button>
    <hr>
    </div>`;
  });
  bookList.innerHTML = listOfbook;
};

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
  displayBooks();
}

addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('name-of-book').value;
  const author = document.getElementById('author-of-book').value;

  AddBooks(title, author);
});

function removeBook (index)  {
  const book = localStorage.getItem('book');
  books = JSON.parse(book);
  books.splice(index, 1);
  localStorage.setItem('book', JSON.stringify(books));
  displayBooks();
};

displayBooks();