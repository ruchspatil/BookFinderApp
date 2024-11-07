// Main React code

const { useState } = React;

const SearchBar = ({ query, setQuery, fetchBooks }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md">
        Search
      </button>
    </form>
  );
};

const Loading = () => {
  return <div className="text-center text-blue-500">Loading...</div>;
};

const Error = ({ message }) => {
  return <div className="text-center text-red-500">{message}</div>;
};

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {books.map((book, index) => (
        <div key={index} className="border rounded-md p-4 bg-white">
          <img
            src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/150'}
            alt={book.title}
            className="w-full h-60 object-cover rounded-md"
          />
          <h3 className="text-xl mt-2">{book.title}</h3>
          <p className="text-gray-600">{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const fetchBooks = async (bookTitle) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${bookTitle}`);
      const data = await response.json();

      if (data.docs.length === 0) {
        setError('No books found!');
      } else {
        setBooks(data.docs);
      }
    } catch (err) {
      setError('Failed to fetch books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold text-gray-800">Book Finder</h1>
      <SearchBar query={query} setQuery={setQuery} fetchBooks={fetchBooks} />
      {loading && <Loading />}
      {error && <Error message={error} />}
      <BookList books={books} />
    </div>
  );
};

// Rendering the App component into the "root" div
ReactDOM.render(<App />, document.getElementById('root'));
