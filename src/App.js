import React from 'react';
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import './App.css';




class App extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0
  }

  render() {
    return (
      <div>
      <Navbar />
      <Game img="img1" />
      </div>
    )
  }

}

export default App;
