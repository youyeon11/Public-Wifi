import React, { useState } from "react";

const BookmarkDelete = () => {
    const [bookmarks, setBookmarks] = useState([
        { id: 1, name: "Bookmark 1" },
        { id: 2, name: "Bookmark 2" },
    ]);

    const handleDelete = (id) => {
        const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
        setBookmarks(updatedBookmarks);
        alert("Bookmark deleted successfully.");
    };

    return (
        <div>
            <h2>Delete Bookmark</h2>
            <ul>
                {bookmarks.map((bookmark) => (
                    <li key={bookmark.id}>
                        {bookmark.name}
                        <button onClick={() => handleDelete(bookmark.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarkDelete;