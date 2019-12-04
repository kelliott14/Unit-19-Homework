import React from "react";
import "./style.css";

function GameCard(props) {
    return (
        <div className="card border-success mb-3">
            <img class="card-img-top" src={props.img} alt="gameCardImage"></img>
        </div>
    )
}