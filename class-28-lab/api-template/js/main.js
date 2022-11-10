//Example fetch using pokemonapi.co
const bookUL = document.querySelector('ul')
const bookList = document.createElement('li')
const localBooks = JSON.parse(localStorage.getItem('books'))
let myList = []
// Display the book list from locale storage if any
if (localBooks) {
  myList = localBooks
  localBooks.forEach(book => {
  bookUL.innerHTML += book
  bookUL.appendChild(document.createElement('hr'))
 } )
}
console.log(myList)

// Add book via ISBN
document.querySelector('#isbn').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // Display book to list
        const bookList = document.createElement('li')
        document.querySelector('ul').appendChild(bookList)
        bookList.textContent = data.title
        // Add book to storage
        myList.push(data.title)
        localStorage.setItem('books', JSON.stringify(myList))
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// 9780140328721
// 0201558025
// 0385472579

// Clear local storage
document.querySelector('#clear').onclick = function() {
  localStorage.clear()
  myList = []
  bookUL.innerHTML = ''
}

