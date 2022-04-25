import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";

const App = () => {

    return (
        <>
            <h1>Hello World!</h1>
            <FontAwesomeIcon icon={ faFeatherPointed } />
        </>
    );

}

// Render
document.addEventListener('DOMContentLoaded', () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
});