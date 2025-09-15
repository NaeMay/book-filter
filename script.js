** start of script.js **

const books = [
  // FoodTech & Culinary
  {
    title: "On Food and Cooking: The Science and Lore of the Kitchen",
    authorName: "Harold McGee",
    releaseYear: 2004,
    category: "FoodTech"
  },
  {
    title: "Ramsay in 10: Delicious Recipes Made in a Flash",
    authorName: "Gordon Ramsay",
    releaseYear: 2021,
    category: "Culinary"
  },
  {
    title: "Gordon Ramsay's Ultimate Home Cooking",
    authorName: "Gordon Ramsay",
    releaseYear: 2013,
    category: "Culinary"
  },
  {
    title: "The Food Lab: Better Home Cooking Through Science",
    authorName: "J. Kenji López-Alt",
    releaseYear: 2015,
    category: "FoodTech"
  },
  // Donald Trump (Leadership & Business)
  {
    title: "The Art of the Deal",
    authorName: "Donald Trump, Tony Schwartz",
    releaseYear: 2015,
    category: "Leadership"
  },
  {
    title: "Think Like a Champion: An Informal Education in Business and Life",
    authorName: "Donald Trump",
    releaseYear: 2009,
    category: "Leadership"
  },
  {
    title: "Great Again: How to Fix Our Crippled America",
    authorName: "Donald Trump",
    releaseYear: 2016,
    category: "Patriotic"
  },
  // Sun Tzu (Strategy)
  {
    title: "The Art of War",
    authorName: "Sun Tzu",
    releaseYear: 2005,
    category: "Strategy"
  },
  // Elon Musk (Tech & Innovation)
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    authorName: "Ashlee Vance",
    releaseYear: 2017,
    category: "Tech"
  },
  {
    title: "The Elon Musk Blog Series: Wait But Why",
    authorName: "Tim Urban",
    releaseYear: 2016,
    category: "Tech"
  },
  // Tech Books
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    authorName: "Robert C. Martin",
    releaseYear: 2008,
    category: "Tech"
  },
  {
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    authorName: "Andrew Hunt, David Thomas",
    releaseYear: 2019,
    category: "Tech"
  },
  {
    title: "Designing Data-Intensive Applications",
    authorName: "Martin Kleppmann",
    releaseYear: 2017,
    category: "Tech"
  },
  // Security Tech Books
  {
    title: "Hacking: The Art of Exploitation",
    authorName: "Jon Erickson",
    releaseYear: 2008,
    category: "Security Tech"
  },
  {
    title: "The Web Application Hacker’s Handbook",
    authorName: "Dafydd Stuttard, Marcus Pinto",
    releaseYear: 2011,
    category: "Security Tech"
  },
  {
    title: "Cybersecurity Ops with bash",
    authorName: "Paul Troncone, Carl Albing",
    releaseYear: 2019,
    category: "Security Tech"
  },
  // Patriotic Books for America
  {
    title:
      "American Nations: A History of the Eleven Rival Regional Cultures of North America",
    authorName: "Colin Woodard",
    releaseYear: 2011,
    category: "Patriotic"
  },
  {
    title: "The American Spirit: Who We Are and What We Stand For",
    authorName: "David McCullough",
    releaseYear: 2017,
    category: "Patriotic"
  },
  {
    title: "1776",
    authorName: "David McCullough",
    releaseYear: 2005,
    category: "Patriotic"
  },
  {
    title: "The Founding Fathers on Leadership",
    authorName: "Donald T. Phillips",
    releaseYear: 2001,
    category: "Patriotic"
  }
];

function sortByYear(bookA, bookB) {
  return bookA.releaseYear - bookB.releaseYear;
}

const filteredBooks = books
  .filter((book) => book.releaseYear > 1950)
  .sort(sortByYear);

// Render books to DOM
function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear existing content
  filteredBooks.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.setAttribute("role", "article");
    bookCard.setAttribute("aria-label", `Book: ${book.title}`);
    bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.authorName}</p>
      <p>Year: ${book.releaseYear}</p>
    `;
    bookList.appendChild(bookCard);
  });
}

// Initialize display
displayBooks();

// Console log for verification
console.log("PatriotPlates AI Book Catalog initialized:", filteredBooks);

