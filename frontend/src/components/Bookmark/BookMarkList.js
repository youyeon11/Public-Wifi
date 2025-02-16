import React from "react";

const BookmarkList = () => {
    const bookmarks = [
        { id: 1, name: "Google", url: "https://www.google.com" },
        { id: 2, name: "Facebook", url: "https://www.facebook.com" },
    ];

    return (
        <div>
            <h2>Bookmark List</h2>
            <ul>
                {bookmarks.map((bookmark) => (
                    <li key={bookmark.id}>
                        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                            {bookmark.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarkList;
