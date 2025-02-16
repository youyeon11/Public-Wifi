import React, { useState } from "react";

const BookmarkGroupAdd = () => {
    const [groupName, setGroupName] = useState("");

    const handleAddGroup = () => {
        alert(`Group "${groupName}" added!`);
        setGroupName("");
    };

    return (
        <div>
            <h2>Add Bookmark Group</h2>
            <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter group name"
            />
            <button onClick={handleAddGroup}>Add Group</button>
        </div>
    );
};

export default BookmarkGroupAdd;
