import React from "react";

const BookmarkGroup = () => {
    const groups = [
        { id: 1, name: "Work" },
        { id: 2, name: "Personal" },
        { id: 3, name: "School" },
    ];

    return (
        <div>
            <h2>Bookmark Groups</h2>
            <ul>
                {groups.map((group) => (
                    <li key={group.id}>{group.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarkGroup;