import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook, removeBook } from '../../Slices/Slices'

export default function Book() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const numberOfBooks = useSelector((state) => state.book.numberOfBooks);
  const [bookName, setBookName] = useState(""); // 👈 Input ke liye state

  const handleAddBook = () => {
    if (bookName.trim() === "") {
      alert("Please enter a book name!");
      return;
    }
    dispatch(addBook(bookName));
    setBookName(""); // input clear kar do
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>📚 Book Component</h1>
      <h2>Number of Books: {numberOfBooks}</h2>

      {/* 🧾 Input box */}
      <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        placeholder="Enter book name..."
        style={{
          padding: "8px 12px",
          fontSize: "16px",
          marginRight: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />

      {/* Add / Remove Buttons */}
      <button
        onClick={handleAddBook}
        style={{
          padding: "8px 16px",
          marginRight: "8px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ➕ Add Book
      </button>

      <button
        onClick={() => dispatch(removeBook())}
        style={{
          padding: "8px 16px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        🗑 Remove Book
      </button>

      {/* 🗂 Book List */}
      <div style={{ marginTop: "20px" }}>
        <h3>Books List:</h3>
        {books.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {books.map((book, index) => (
              <li key={index} style={{ fontSize: "18px", marginBottom: "5px" }}>
                📖 {book}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
