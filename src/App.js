import React from 'react';
import AsideDeck from './components/AsideDeck'
import Desk from './components/Desk'
import Stats from "./components/Stats"
import game from "./model"
import './App.css';

const App = () => {
  const initialState = game.initGame();

  /* pouze pro testovací účely */
  let dummy = new game(initialState)
  dummy.Turn(5);
  dummy.Turn(5);
  dummy.Turn(8);
  console.log({...dummy});

  return (
    <div className="App">
      <h1>SuMaxer Game</h1>
      <Stats />
      <div className="table">
        <AsideDeck />
        <Desk />
      </div>
    </div>
  );
}

export default App;
