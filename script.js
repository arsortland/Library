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

function checkIfRead(checkbox){
    if (myLib[myLib.length -1].read){
        checkbox.checked = true;
        checkbox.classList.add('haveread');
        checkbox.textContent = "Book Read";
        checkbox.parentElement.style.backgroundColor = 'rgb(26, 169, 66)';
    }
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
    if (title.value == "" || author.value == "" || pages.value == ""){
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
        
        aBook.classList.add('bookitem');
        readbutton.classList.add('readbutton');
        readbutton.textContent = "Not Read";
        deletebutton.textContent = 'Delete book';
        deletebutton.classList.add('deletebutton');
        
        let i = myLib.length -1;
        aBook.innerHTML ='Title: '+ myLib[i].title + '<br>';
        aBook.innerHTML +='Author: '+ myLib[i].author +'<br>';
        aBook.innerHTML +='Pages: '+ myLib[i].pages + '<br>';
        aBook.innerHTML +='Info: '+ myLib[i].info;
        aBook.appendChild(deletebutton);
        aBook.appendChild(readbutton);
        display.appendChild(aBook);
        checkIfRead(readbutton);

        readbutton.onclick = function () {
            if (this.textContent === "Book Read"){
                this.parentElement.style.backgroundColor = "rgb(196, 116, 19)",
                myLib[i].read = false,
                this.textContent = "Not Read";  
            }
            else if (this.textContent === "Not Read")
                this.parentElement.style.backgroundColor = 'rgb(26, 169, 66)',
                myLib[i].read = true,
                this.textContent = "Book Read",
                this.classList.toggle('haveread');
        };
        delBook();            
}