import React, { useState } from "react";
import axios from "axios";

function AddBook() {
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
        "https://ubiquitous-yodel-69wqqg79xvqv24g9g-5000.app.github.dev/addbooks",
        book
      )
      .then(() => {
        alert("Book added successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding book");
      });
  };

  return (
    <div>
      <h3>Add New Book</h3>

      <form onSubmit={handleSubmit}>
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
        <br />
        <br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
