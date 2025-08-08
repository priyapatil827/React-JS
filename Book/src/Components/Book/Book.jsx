import { useState } from "react";
import "./Book.css";

export default function Book() {
    const [books, setBooksList] = useState([
        {
            id: 1,
            title: "The Secret Book",
            author: "Rhonda Byrne"
        }
    ]);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleAdd = () => {
        if (title.trim() === "" || author.trim() === "") return;

        const newBook = {
            id: books.length + 1,
            title: title,
            author: author
        };

        setBooksList([...books, newBook]);
        setTitle("");
        setAuthor("");
    };

    const handleRemove = (index) => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooksList(updatedBooks);
    };

    return (
        <div>
            <h2 className="title">Book Tracking System</h2>
            <input
                type="text"
                placeholder="Enter Book Name :"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-book"
            />
            <input
                type="text"
                placeholder="Enter Author Name :"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="input-book"
            />
            <button className="add-book" onClick={handleAdd}>Add</button>

            {books.map((book, index) => (
                <div key={book.id}>
                    
                    <p>Title : {book.title}</p>
                    <p>Author : {book.author}</p>
                    <button className="remove-book" onClick={() => handleRemove(index)}>X</button>
                </div>
            ))}
        </div>
    );
}
