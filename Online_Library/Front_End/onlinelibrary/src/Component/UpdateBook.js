import React, { useState } from "react";
import axios from "axios";

function UpdateBook() {
  const [id, setId] = useState("");
  const [book, setBook] = useState({
    booktitle: "",
    PubYear: "",
    author: "",
    Topic: "",
    formate: ""
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://ubiquitous-yodel-69wqqg79xvqv24g9g-5000.app.github.dev/updatebook/${id}`,
        book
      )
      .then(() => {
        alert("Book updated successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error updating book");
      });
  };

  return (
    <div>
      <h3>Update Book</h3>

      <input
        type="text"
        placeholder="Book ID"
        onChange={(e) => setId(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        name="booktitle"
        placeholder="Book Title"
        onChange={handleChange}
      />
      <br />

      <input
        type="number"
        name="PubYear"
        placeholder="Publication Year"
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="Topic"
        placeholder="Topic"
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="formate"
        placeholder="Format"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>Update Book</button>
    </div>
  );
}

export default UpdateBook;
