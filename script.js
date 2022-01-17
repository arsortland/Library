const modal = document.querySelector('.modal');
const btn = document.getElementById('addbtn')
const closeIt = document.querySelector('.close');

const form = document.querySelector('.form');

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const readbox = document.querySelector('#readbox');
const info = document.querySelector('.info');

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function (e) {
    if (e.target == modal){
        modal.style.display = "none";
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

const test = new Book('enTittel', 'enForfatter', 500, 'true', 'much wow')
const test2 = new Book('annenTittel', 'annenForfatter', 999, 'false')


function addBookToLib(){
    let aTitle = title.value;
    let anAuthor = author.value; 
    let totPages = pages.value;
    let haveRead = readbox.checked;
    let haveInfo = info.value;
    const newBook = new Book(aTitle, anAuthor, totPages, haveRead, haveInfo);
    console.log(title.value);
    console.log(author.value);
    console.log(pages.value);
    console.log(readbox.checked);
    console.log(info.value);
    myLib.push(test);
    myLib.push(test2);
    myLib.push(newBook);
    //reset form and close modal here or make a func that does. MAKE FUNC THAT DOES YOU!
}

// //write func that loops through arr of books and displays them on a table of kind.
// //Add a new book button for making a new book obj.