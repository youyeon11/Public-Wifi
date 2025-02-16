import React, { useState } from "react";

const BookmarkGroupDelete = () => {
    const [groups, setGroups] = useState([
        { id: 1, name: "Work" },
        { id: 2, name: "Personal" },
        { id: 3, name: "School" },
    ]);

    const handleDeleteGroup = (id) => {
        setGroups(groups.filter((group) => group.id !== id));
    };

    return (
        <div>
            <h2>Delete Bookmark Group</h2>
            <ul>
                {groups.map((group) => (
                    <li key={group.id}>
                        {group.name}
                        <button onClick={() => handleDeleteGroup(group.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarkGroupDelete;