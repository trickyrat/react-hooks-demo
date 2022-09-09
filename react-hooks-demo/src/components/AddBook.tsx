
export default {}
// import React, { ChangeEvent, useState } from "react";
// import BookDataService from "../services/BookService";
// import IBook from '../interfaces/book'
// import { Switch, Button, Form, Input } from "antd";
// const AddBook: React.FC = () => {
//   const initialBookState = {
//     id: "",
//     title: "",
//     author: "",
//     description: "",
//     published: false
//   };
//   const [book, setBook] = useState<IBook>(initialBookState);
//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setBook({ ...book, [name]: value });
//   };
//   const saveBook = () => {
//     const data: IBook = {
//       id: "",
//       published: book.published,
//       title: book.title,
//       description: book.description,
//       author: book.author
//     };
//     BookDataService.create(data)
//       .then(response => {
//         setBook({
//           id: response.data.id,
//           title: response.data.title,
//           author: response.data.author,
//           description: response.data.description,
//           published: response.data.published
//         });
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
//   const onStatusChange = (checked: boolean) => {
//     book.published = checked;
//   };
//   return (
//     <Form>
//       <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please input the title!" }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item label="Author" name="author" rules={[{ required: true, message: "Please input the author!" }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item label="Description" name="description">
//         <Input />
//       </Form.Item>
//       <Form.Item label="Status" name="published">
//         <Switch defaultChecked onChange={onStatusChange}></Switch>
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit" onClick={saveBook}>
//           Submit
//         </Button>
//       </Form.Item>
//     </Form >
//   );
// };
// export default AddBook;