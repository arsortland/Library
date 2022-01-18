const modal = document.querySelector('.modal');
const btn = document.getElementById('addbtn')
const closeIt = document.querySelector('.close');

const form = document.querySelector('.form');

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const readbox = document.querySelector('#readbox');
const info = document.querySelector('.info');
const display = document.querySelector('.display');

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function (e) {
    if (e.target == modal){
        modal.style.display = "none";
    }
}

function resetAndClose(){
    form.reset();
    modal.style.display = "none";
}

function delBook(){
    document.querySelectorAll('.deletebutton').forEach(delbtn => delbtn.addEventListener('click', () =>{
        delbtn.parentElement.remove();
    }));
}


const myLib = [];

function Book(title, author, pages, read, info = ""){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = info;
}

function addBookToLib(){
    if (title.value == ""){
        //Find a valid error here that doesnt append and keep it for each empty click.
        return;
    }
    let aTitle = title.value;
    let anAuthor = author.value; 
    let totPages = pages.value;
    let haveRead = readbox.checked;
    let haveInfo = info.value;
    const newBook = new Book(aTitle, anAuthor, totPages, haveRead, haveInfo);
    myLib.push(newBook);
    resetAndClose();
    displayBooks();
}
function displayBooks(){
        const aBook = document.createElement('div');
        const readbutton = document.createElement('button');
        const deletebutton = document.createElement('button');
        readbutton.textContent = 'Book read';
        deletebutton.textContent = 'Delete book';
        aBook.classList.add('bookitem');
        readbutton.classList.add('readbutton');
        deletebutton.classList.add('deletebutton');
        aBook.innerHTML ='Title: '+ myLib[myLib.length -1].title + '<br>';
        aBook.innerHTML +='Author: '+ myLib[myLib.length -1].author +'<br>';
        aBook.innerHTML +='Pages: '+ myLib[myLib.length -1].pages + '<br>';
        aBook.innerHTML +='Read: '+ myLib[myLib.length -1].read + '<br>';
        aBook.innerHTML +='Info: '+ myLib[myLib.length -1].info;
        aBook.appendChild(readbutton);
        aBook.appendChild(deletebutton);
        display.appendChild(aBook);
        delBook();
}



//Make readbutton a slide and change background depending on it.(change true/false);
//mebe an eventlistener for queryselectorall and change readbox.checked on click.

//Don't allow submit if field is empty.
//CSS!