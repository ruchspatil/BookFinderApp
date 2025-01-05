# Book Finder App

## Overview
Book Finder is a simple web application designed to help users search for books by title. The app uses the Open Library API to retrieve book details, including titles, authors, publication year, and book covers (if available). It is aimed at helping users quickly find information about books. 

## Features
- Search for books by title.
- Display book details: title, author(s), publication year, and cover image (if available).
- Error handling if no books are found or the API request fails.

## Technologies Used
- **Frontend Framework:** React
- **State Management:** React's `useState` and `useEffect`
- **Styling:** Tailwind CSS
- **API:** Open Library Search API

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ruchspatil/BookFinderApp.git
   cd book-finder

2. Install dependencies:
   ```bash
   
   npm install


3. Start the app:
   ```bash

   npm start
## How It Works
- When the user enters a book title in the search bar and clicks "Search", the app makes an API request to the Open Library API.
- It displays a list of books with their title, author(s), publication year, and cover images (if available).
- If no books are found or an error occurs, an appropriate message is shown.

## Contributing
Feel free to open an issue or a pull request for suggestions, improvements, or bug fixes!

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/ruchspatil/BookFinderApp)
