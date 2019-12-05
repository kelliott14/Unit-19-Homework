import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span>Don't click the same card twice!</span>
            <span>Score: {props.currentScore} | Top Score: {props.topScore} </span>
        </nav>
    )
}

export default Navbar;