import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://ubiquitous-yodel-69wqqg79xvqv24g9g-5000.app.github.dev/allbooks")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3>Display Books</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Author</th>
            <th>Topic</th>
            <th>Format</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book._id}</td>
              <td>{book.booktitle}</td>
              <td>{book.PubYear}</td>
              <td>{book.author}</td>
              <td>{book.Topic}</td>
              <td>{book.formate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayBooks;
