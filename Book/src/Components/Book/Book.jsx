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
    const [index, setIndex] = useState(0);

    const addBook = () => {
        const newBook = {
            title: title,
            author: author,
        }
        setBooksList([...books, newBook])
        setTitle("");
        setAuthor("");
    }

    const removeBook = (index) => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooksList(updatedBooks);
    };

    const updateBook = (index) => {
        setIndex(index);
        setTitle(books[index].title);
        setAuthor(books[index].author);
    }

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
            <button className="add-book" onClick={addBook}>Add</button>

            {books.map((book, index) => (
                <div key={book.id}>

                    <p className="p-title">Title : {book.title}</p>
                    <p className="p-author">Author : {book.author}</p>
                    <button className="removebook" onClick={() => removeBook(index)}>Remove</button>
                    <button className="updateBook" onClick={() => updateBook(index)}>Update</button>
                </div>
            ))}
        </div>
    );
}
