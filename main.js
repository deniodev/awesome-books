const nameOfBookField = document.querySelector('#name-of-book');
const authorOfBookField = document.querySelector('#author-of-book');
const addBook = document.querySelector('.add-book-button');
const form = document.querySelector('form')
const bookName = document.querySelector('.name-of-book'); 



form.addEventListener('submit', (e)=>{
    const bookShelf=[
        {
            nameOfbook : nameOfBookField.value,
            authorOfBook : authorOfBookField.value, 
        }
    ];
    if(bookShelf[0].nameOfbook !== '' && bookShelf[0].authorOfBook !== ''){
         e.preventDefault();
         console.log(bookShelf);
         bookName.innerHTML=bookShelf[0].nameOfbook;

    }
    nameOfBookField.value="";
    authorOfBookField.value="";
})