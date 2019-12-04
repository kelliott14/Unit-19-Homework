import React from 'react';
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import './App.css';



class App extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0,
    num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  

  render() {
    return (
      <div>
      <Navbar />
      <Game />
      </div>
    )
  }

}

export default App;
