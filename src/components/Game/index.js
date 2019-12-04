import React from "react";
import "./style.css";

function GameCard(props) {
    return (
        <div className="card border-success mb-3" onClick={() => props.handleClick(props.id)}>
            <img className="card-img" 
                    key={props.id} src={require(`../../../public/images/${props.image}.JPG`)} 
                    alt="gameCardImage"></img>
        </div>
    )
}



export default GameCard;