import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
// import AddBook from "./components/AddBook";
// import BooksList from "./components/BooksList";
import { Routes, Route, Link } from "react-router-dom";
import { AppContainer, ColumnContainer, ColumnTitle, CardContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';
import { CustomDragLayer } from './components/CustomDragLayer';

const App: React.FC = () => {
  const { lists, dispatch } = useAppState();

  return (
    <div>
      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
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
        </Routes>
      </div> */}
      <AppContainer>
        <CustomDragLayer />
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id} />
        ))}
        <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => dispatch(addList(text))} />
      </AppContainer>
    </div>

  );
}

export default App;
