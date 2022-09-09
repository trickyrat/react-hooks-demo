
import http from "../http-common";
import IBook from "../interfaces/book";
import IListResponse from "../interfaces/ListResponse";

const baseURL = "/books";

const getAll = () => {
  return http.get<IListResponse<IBook>>(baseURL);
};

const get = (id: string) => {
  return http.get<IBook>(`${baseURL}/${id}`);
};

const create = (book: IBook) => {
  return http.post<IBook>(baseURL, book);
};

const update = (id: string, book: IBook) => {
  return http.put<IBook>(`${baseURL}/${id}`, book);
};

const remove = (id: string) => {
  return http.delete(`${baseURL}/${id}`);
};

const removeAll = () => {
  return http.delete(baseURL);
};


const findByTitle = (title: string) => {
  return http.get<IListResponse<IBook>>(`${baseURL}?title=${title}`);
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