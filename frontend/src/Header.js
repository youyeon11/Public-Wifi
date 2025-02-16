import React from "react";

const Header = () => {
    return (
        <header>
            <h1>Welcome to the Application</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/bookmarks">Bookmarks</a></li>
                    <li><a href="/history">History</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;