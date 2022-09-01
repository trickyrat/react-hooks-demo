import React, { useState, useEffect } from "react";
import BookDataService from "../services/BookService";
import { Link } from "react-router-dom";
const BooksList = () => {
  const [Books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  useEffect(() => {
    retrieveBooks();
  }, []);
  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
  const retrieveBooks = () => {
    BookDataService.getAll()
      .then(response => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveBooks();
    setCurrentBook(null);
    setCurrentIndex(-1);
  };
  const setActiveBook = (Book, index) => {
    setCurrentBook(Book);
    setCurrentIndex(index);
  };
  const removeAllBooks = () => {
    BookDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
  const findByTitle = () => {
    BookDataService.findByTitle(searchTitle)
      .then(response => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Books List</h4>
        <ul className="list-group">
          {Books &&
            Books.map((Book, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveBook(Book, index)}
                key={index}
              >
                {Book.title}
              </li>
            ))}
        </ul>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllBooks}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentBook ? (
          <div>
            <h4>Book</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentBook.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentBook.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentBook.published ? "Published" : "Pending"}
            </div>
            <Link
              to={"/Books/" + currentBook.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Book...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default BooksList;