/**
 * MAKE HTML
 * MAKE A LIL CSS TO GET THE SITE RIGHT
 * GET JS AFTER THAT 
 * AND LASTLY STYLE HTML AND CSS
*/

let myLib = [];

function Book(title, author, pages, read, info = ""){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = info;
}



function addBookToLib(){
    const popup = document.getElementById('popup');
    popup.classList.toggle('hide');
    popup.classList.toggle('show');
    // toggle in another class for body/html to make background more grey?
}

function showBooks(){
    for (let i=0;i<myLib.length;i++){
        aBook.append(myLib[i]);
        //myLib[i] <- Make this append to some DOM and show it!
    }
}

//write func that loops through arr of books and displays them on a table of kind.
//Add a new book button for making a new book obj.
const libcontainer = document.querySelector('.libcontainer');
const aBook = document.createElement('div');
aBook.classList.add('abook');
libcontainer.appendChild(aBook);