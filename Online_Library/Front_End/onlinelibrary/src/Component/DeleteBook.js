import React, { useState } from "react";
import axios from "axios";

function DeleteBook() {
  const [id, setId] = useState("");

  const handleDelete = () => {
    axios
      .post(
        `https://ubiquitous-yodel-69wqqg79xvqv24g9g-5000.app.github.dev/deleteBook/${id}`
      )
      .then(() => {
        alert("Book deleted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error deleting book");
      });
  };

  return (
    <div>
      <h3>Delete Book</h3>

      <input
        type="text"
        placeholder="Book ID"
        onChange={(e) => setId(e.target.value)}
      />
      <br /><br />

      <button onClick={handleDelete}>Delete Book</button>
    </div>
  );
}

export default DeleteBook;
