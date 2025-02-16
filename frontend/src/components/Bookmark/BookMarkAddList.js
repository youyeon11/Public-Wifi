import React, { useState } from "react";

const BookmarkAddList = () => {
    const [bookmarkName, setBookmarkName] = useState("");

    const handleAdd = () => {
        if (bookmarkName) {
            alert(`Bookmark "${bookmarkName}" has been added.`);
            setBookmarkName("");
        } else {
            alert("Please enter a bookmark name.");
        }
    };

    return (
        <div>
            <h2>Add Bookmark</h2>
            <input
                type="text"
                placeholder="Enter bookmark name"
                value={bookmarkName}
                onChange={(e) => setBookmarkName(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default BookmarkAddList;