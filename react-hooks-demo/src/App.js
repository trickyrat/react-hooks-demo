import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import "bootstrap/dist/css/bootstrap.min.css";
import AddBook from "./components/AddBook";
import Book from "./components/Book";
import BooksList from "./components/BooksList";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/books" className="navbar-brand">
          react-hook-demo
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/books"} className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books/:id" element={<Book />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
