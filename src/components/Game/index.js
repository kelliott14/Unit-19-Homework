import React from "react";
import "./style.css";

function GameCard(props) {
    return (
        <div className="card border-success mb-3">
            <img class="card-img-top" src={require(`../../../public/images/${props.img}.JPG`)} alt="gameCardImage"></img>
        </div>
    )
}

export default GameCard;