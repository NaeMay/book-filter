# book-filter
“Patriot-Plates-AI Book Filter and Sort”

## Description
Developed the PatriotPlates AI Book Filter and Sort project for freeCodeCamp’s JavaScript Algorithms and Data Structures certification. This JavaScript application filters books by release year and sorts them in ascending order, enhanced with a responsive HTML/CSS interface featuring a modern MAGA-colored design (red #B22234, white #FFFFFF, blue #3C3B6E), futuristic Orbitron font, and glitch effect. Integrated with PatriotPlates AI’s FoodTech vision and my Stratford Cooking and Catering Diploma, it demonstrates data processing for culinary applications, complementing my security-tech ventures inspired by Elon Musk and Gordon Ramsay. A social footer links to my professional profiles, strengthening personal branding.

## Features
- **Data Filtering**: Filters books released after 1950 using `filter()`.
- **Sorting Algorithm**: Sorts books by release year with a custom comparison function.
- **Responsive Interface**: Displays books in a flexbox layout with PatriotPlates AI branding (logo, gold #feac32, dark green #00471b accents).
- **Modern Design**: Features a MAGA-colored gradient background, Orbitron font, and glitch text effect for a futuristic look.
- **Social Footer**: Links to GitHub, X, LinkedIn, and freeCodeCamp profiles with Font Awesome icons.
- **Accessible Design**: Includes ARIA roles and labels (WCAG 2.1 Level AA).
- **FoodTech Integration**: Supports data processing for culinary catalogs (e.g., recipe books).
- **Console Verification**: Outputs results for debugging.

## Achievements
- Passed all freeCodeCamp test cases for filtering and sorting.
- Mastered JavaScript array methods (`filter`, `sort`) and DOM manipulation.
- Enhanced portfolio with a visually striking, branded interface for FoodTech and tech applications.
- Completed as part of 330+ projects, strengthening front-end, FoodTech, and cybersecurity skills.
- Strengthened PatriotPlates AI’s portfolio with data-driven culinary applications.

## Links
- **Live Demo**: [https://patriot-book-reneemay.netlify.app]
- **CodePen**: [codepen.io/reneemay/pen/patriot-book]
- **GitHub**: [https://github.com/NaeMay/patriot-book]
- **Certification**: freeCodeCamp JavaScript Algorithms and Data Structures: [https://freecodecamp.org/certification/ReneeMay/javascript-algorithms-and-data-structures-v8]

## Tech Stack
- JavaScript, HTML, CSS
- Font Awesome (6.5.1) for social icons
- Google Fonts (Orbitron) for futuristic typography
- PNG logo for PatriotPlates AI branding

## Setup
1. Clone the repository.
2. Open `index.html` in a browser.
3. Ensure `images/PatriotPlates-AI-Logo.png` is in the parent `Top Projects/images` folder.

## Code Sample
```javascript
const books = [
  { title: "On Food and Cooking: The Science and Lore of the Kitchen", authorName: "Harold McGee", releaseYear: 2004, category: "FoodTech" },
  { title: "The Art of the Deal", authorName: "Donald Trump, Tony Schwartz", releaseYear: 2015, category: "Leadership" },
  // ... (20 books across FoodTech, Culinary, Leadership, Tech, Security Tech, Patriotic)
];
function sortByYear(bookA, bookB) {
  return bookA.releaseYear - bookB.releaseYear;
}
const filteredBooks = books.filter(book => book.releaseYear > 1950).sort(sortByYear);
