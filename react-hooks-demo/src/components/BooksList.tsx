// import React, { useState, useEffect, ChangeEvent } from "react";
// import BookDataService from "../services/BookService";
// import IBook from "../interfaces/book";
// import type { ColumnsType } from "antd/es/table";
// import { Space, Table, Tag, Button, Modal } from "antd";
// import Book from './Book';

// const BooksList: React.FC = () => {
//   const [Books, setBooks] = useState<Array<IBook>>([]);
//   const [currentBook, setCurrentBook] = useState<IBook | null>(null);
//   const [currentIndex, setCurrentIndex] = useState<number>(-1);
//   const [searchTitle, setSearchTitle] = useState<string>("");
//   const [isDetailVisible, setIsDetailVisible] = useState<boolean>(false);

//   const columns: ColumnsType<IBook> = [
//     {
//       title: "Title",
//       dataIndex: "title",
//       key: 'title'
//     },
//     {
//       title: "Author",
//       dataIndex: "author",
//       key: "author"
//     },
//     {
//       title: "Status",
//       dataIndex: "published",
//       key: "published",
//       render: (text: any) => (
//         <>
//           <Tag color={text ? "green" : "volcano"}>
//             {text ? "Published" : "Pending"}
//           </Tag>
//         </>

//       )
//     },
//     {
//       title: "Actions",
//       dataIndex: "actions",
//       key: "actions",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Button type="primary" onClick={() => openBook(record)}>details</Button>
//           <Button type="primary" danger onClick={() => removeBook(record.id)}>delete</Button>
//         </Space>
//       ),
//     },
//   ];
//   useEffect(() => {
//     retrieveBooks();
//   }, []);
//   const onChangeSearchTitle = (event: ChangeEvent<HTMLInputElement>) => {
//     const searchTitle = event.target.value;
//     setSearchTitle(searchTitle);
//   };
//   const openBook = (book: IBook) => {
//     setCurrentBook(book);
//   };
//   const retrieveBooks = () => {
//     BookDataService.getAll()
//       .then(response => {
//         setBooks(response.data.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
//   const refreshList = () => {
//     retrieveBooks();
//     setCurrentBook(null);
//     setCurrentIndex(-1);
//   };
//   const setActiveBook = (book: IBook, index: number) => {
//     setCurrentBook(book);
//     setCurrentIndex(index);
//   };
//   const removeAllBooks = () => {
//     BookDataService.removeAll()
//       .then(response => {
//         refreshList();
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
//   const removeBook = (id: string) => {
//     BookDataService.remove(id)
//       .then(response => {
//         refreshList();
//       })
//       .catch(e => {
//         console.log(e);
//       })
//   }
//   const findByTitle = () => {
//     BookDataService.findByTitle(searchTitle)
//       .then(response => {
//         setBooks(response.data.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const handleDetailOk = () => {
//     setIsDetailVisible(true);
//   };
//   const handleDetailCancel = () => {
//     setIsDetailVisible(false);
//   };
//   return (
//     <>
//       <Table dataSource={Books} rowKey={record => record.id} columns={columns}></Table>
//       <Modal title="Book Details" visible={isDetailVisible} onOk={handleDetailOk} onCancel={handleDetailCancel}>
//         <Book data={currentBook}></Book>
//       </Modal>
//     </>
//   );
// };
// export default BooksList;
export default {}