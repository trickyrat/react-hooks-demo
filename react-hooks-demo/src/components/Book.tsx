// import React, { useState, useEffect, ChangeEvent } from "react";
// import { useParams, useNavigate } from 'react-router-dom';
// import IBook from "../interfaces/book";
// import BookDataService from "../services/BookService";
// import { Descriptions, Badge } from "antd";

// type BookProps = {
//   id: string,
//   title: string,
//   description: string,
//   author: string,
//   published: boolean
// }

// const Book: React.FC<BookProps> = ({ book, ...props }) => {
//   const { id } = useParams();
//   let navigate = useNavigate();
//   // const initialBookState = {
//   //   id: "",
//   //   title: "",
//   //   description: "",
//   //   author: "",
//   //   published: false
//   // };
//   const initialBookState = book;
//   const [currentBook, setCurrentBook] = useState<IBook>(initialBookState);
//   const [message, setMessage] = useState<string>("");
//   const getBook = (id: string) => {
//     BookDataService.get(id)
//       .then(response => {
//         setCurrentBook(response.data);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
//   useEffect(() => {
//     if (id)
//       getBook(id);
//   }, [id]);
//   const handleInputChange = (event: ChangeEvent) => {
//     // const { name, value } = event.target;
//     // setCurrentBook({ ...currentBook, [name]: value });
//   };
//   const updatePublished = (status: boolean) => {
//     var data = {
//       id: currentBook.id,
//       title: currentBook.title,
//       description: currentBook.description,
//       author: currentBook.author,
//       published: status
//     };
//     BookDataService.update(currentBook.id!, data)
//       .then(response => {
//         setCurrentBook({ ...currentBook, published: status });
//         setMessage("The status was updated successfully!");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
//   const updateBook = () => {
//     BookDataService.update(currentBook.id!, currentBook)
//       .then(response => {
//         console.log(response.data);
//         setMessage("The Book was updated successfully!");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
//   const deleteBook = () => {
//     BookDataService.remove(currentBook.id!)
//       .then(response => {
//         navigate("/Books");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
//   return (
//     <Descriptions>
//       <Descriptions.Item label="Title">{currentBook.title}</Descriptions.Item >
//       <Descriptions.Item label="Author">{currentBook.author}</Descriptions.Item >
//       <Descriptions.Item label="Description">{currentBook.description}</Descriptions.Item >
//       <Descriptions.Item label="Status">
//         <Badge status={currentBook.published ? "success" : "processing"} text={currentBook.published ? "Published" : "Pending"} />
//       </Descriptions.Item >
//       <Descriptions.Item label="Title">{currentBook.title}</Descriptions.Item >
//     </Descriptions>
//   );
// };
// export default Book;

export default {}