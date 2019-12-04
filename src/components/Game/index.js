import React from "react";
import "./style.css";
import Images from "../../gamecard.json";

class GameCard extends React.Component {
    state = {
        Cards: Images
    }

    shuffle = () => {
    var temp = this.state.Cards
    for (var i = temp.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var k = temp[i];
      temp[i] = temp[j];
      temp[j] = k;
    }
    this.setState({Cards: temp})
  }


    render() {
        return (
            <div >
                {this.state.Cards.map(card => {
                    return <div className="card border-success mb-3" onClick={this.shuffle}>
                     <img className="card-img" key={card.id} src={require(`../../../public/images/${card.image}.JPG`)} alt="gameCardImage"></img>
                    </div>
                }
                )
                }
                
            </div>
        )
    }

}



export default GameCard;