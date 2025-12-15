import AddBook from "./Component/AddBook";
import UpdateBook from "./Component/UpdateBook";
import DisplayBooks from "./Component/DisplayBooks";
import DeleteBook from "./Component/DeleteBook";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h2>Online Library System</h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Book</Link>
            </li>
            <li>
              <Link to="/display">Display Books</Link>
            </li>
            <li>
              <Link to="/update">Update Book</Link>
            </li>
            <li>
              <Link to="/delete">Delete Book</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h3>Welcome to Online Library</h3>} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/display" element={<DisplayBooks />} />
          <Route path="/update" element={<UpdateBook />} />
          <Route path="/delete" element={<DeleteBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
