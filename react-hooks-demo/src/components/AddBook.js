import React, { useState } from "react";
import BookDataService from "../services/BookService";
const AddBook = () => {
  const initialBookState = {
    id: null,
    title: "",
    author: "",
    description: "",
    published: false
  };
  const [Book, setBook] = useState(initialBookState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setBook({ ...Book, [name]: value });
  };
  const saveBook = () => {
    var data = {
      title: Book.title,
      description: Book.description
    };
    BookDataService.create(data)
      .then(response => {
        setBook({
          id: response.data.id,
          title: response.data.title,
          author: response.data.author,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newBook = () => {
    setBook(initialBookState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newBook}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Book.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Author</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Book.author}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={Book.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <button onClick={saveBook} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddBook;