/* 4. Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order. */

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 }
];

function arrangeBooksInAlphabeticalOrder(books, callback) {
   
    const titles = books.map(book => book.title);
    titles.sort();
     callback(titles);  // Invoke the callback function with the sorted titles
}


function logTitles(titles) {
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
}

arrangeBooksInAlphabeticalOrder(books, logTitles);
