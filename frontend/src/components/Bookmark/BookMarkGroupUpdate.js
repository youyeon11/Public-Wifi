import React, { useState } from "react";

const BookmarkGroupUpdate = () => {
    const [groups, setGroups] = useState([
        { id: 1, name: "Work" },
        { id: 2, name: "Personal" },
    ]);

    const [updatedName, setUpdatedName] = useState("");

    const handleUpdate = (id) => {
        setGroups(
            groups.map((group) =>
                group.id === id ? { ...group, name: updatedName } : group
            )
        );
        setUpdatedName("");
    };

    return (
        <div>
            <h2>Update Bookmark Group</h2>
            <ul>
                {groups.map((group) => (
                    <li key={group.id}>
                        {group.name}
                        <input
                            type="text"
                            placeholder="New name"
                            value={updatedName}
                            onChange={(e) => setUpdatedName(e.target.value)}
                        />
                        <button onClick={() => handleUpdate(group.id)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarkGroupUpdate;
