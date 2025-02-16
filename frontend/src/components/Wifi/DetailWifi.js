import React from "react";

const DetailWifi = ({ wifiDetails }) => {
    // Example WiFi details object
    const details = wifiDetails || {
        ssid: "Example WiFi",
        strength: "Strong",
        location: "1st Floor, Lobby",
    };

    return (
        <div>
            <h2>WiFi Details</h2>
            <p><strong>SSID:</strong> {details.ssid}</p>
            <p><strong>Strength:</strong> {details.strength}</p>
            <p><strong>Location:</strong> {details.location}</p>
        </div>
    );
};

export default DetailWifi;
