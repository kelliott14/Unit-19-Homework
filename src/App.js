import React from 'react';
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import './App.css';
import GameCards from "./gamecard.json";



class App extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0,
    cards: GameCards,
    pickedCards: []
  }

  scoreUpdate = (id) => {
    this.setState({
      currentScore: (this.state.currentScore + 10)
    });

    let tempArr = this.state.pickedCards
    tempArr.push(id)
    this.setState({pickedCards: tempArr});
  }

  handleClick = id => {
    //check if already picked, add to score
    let check = this.state.pickedCards.includes(id) 
    check ? this.endGame() : this.scoreUpdate(id)

    //shuffles game cards into a new order
    var temp = this.state.cards
    for (var i = temp.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var k = temp[i];
      temp[i] = temp[j];
      temp[j] = k;
    }
    this.setState({cards: temp})
  }

  endGame = () => {
    if(this.state.currentScore > this.state.topScore) {
      this.setState({topScore: this.state.currentScore}) 
      console.log("called")
    }
    let tempArr = []
    this.setState({
      currentScore: 0,
      pickedCards: tempArr
    }, () => {

      console.log("---52")
      console.log(this.state.pickedCards)
    })

  }

  render() {
    return (
      <Wrapper>
        <Navbar currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        <Container>
         {this.state.cards.map(card => {
          return <Game  
                    handleClick={this.handleClick} 
                    image={card.image} 
                    key={card.id}
                    id={card.id}
                />  
        })}
          
        </Container>

      </Wrapper>
    )
  }

}

export default App;
