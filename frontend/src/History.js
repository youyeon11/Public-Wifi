import React from "react";

const History = () => {
    const historyItems = [
        { id: 1, action: "Connected to WiFi", timestamp: "2025-02-15 10:30:00" },
        { id: 2, action: "Added Bookmark", timestamp: "2025-02-15 11:00:00" },
    ];

    return (
        <div>
            <h2>History</h2>
            <ul>
                {historyItems.map((item) => (
                    <li key={item.id}>
                        {item.action} at {item.timestamp}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
