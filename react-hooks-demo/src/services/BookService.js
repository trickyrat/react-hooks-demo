import http from "../http-common";

const baseURL = "/books";

const getAll = () => {
  return http.get(baseURL);
};

const get = (id) => {
  return http.get(`${baseURL}/${id}`);
};

const create = (book) => {
  return http.post(baseURL, book);
};

const update = (id, book) => {
  return http.put(`${baseURL}/${id}`, book);
};

const remove = (id) => {
  return http.delete(`${baseURL}/${id}`);
};

const removeAll = () => {
  return http.delete(baseURL);
};


const findByTitle = (title) => {
  return http.get(`${baseURL}?title=${title}`);
};

const BookService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default BookService;