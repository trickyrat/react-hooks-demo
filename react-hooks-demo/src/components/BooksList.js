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
        setBooks(response.data.data);
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
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
  const removeBook = (id) => {
    BookDataService.remove(id)
      .then(response => {
        refreshList();
      })
      .catch(e => {
        console.log(e);
      })
  }
  const findByTitle = () => {
    BookDataService.findByTitle(searchTitle)
      .then(response => {
        setBooks(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className="list row">
      <div className="col-md-6">
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
      <div className="col-md-12">
        <h4>Books List</h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Books && Books.map((Book, index) => (
              <tr key={Book.id} className={(index === currentIndex ? "table-active" : "")}>
                <th scope="row">{Book.id}</th>
                <td>{Book.title}</td>
                <td>{Book.author}</td>
                <td className="row">
                  <div className="col">
                    <button type="button" className="btn btn-primary column" onClick={() => setActiveBook(Book, index)}>Details</button>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-danger column" onClick={() => removeBook(Book.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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