import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"; // Header 컴포넌트 import
import Main from "./Main"; // Main 컴포넌트 import

function App() {
    return (
        <div>
            <h1>와이파이 정보 구하기</h1>
            <Header />
            <Main />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);