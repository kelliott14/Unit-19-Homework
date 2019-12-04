import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Clicky Game</span>
            <span>Don't click the same card twice!</span>
            <span>Score: {props.currentScore} | Top Score: {props.topScore} </span>
        </nav>
    )
}

export default Navbar;