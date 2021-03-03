
import React, { useState } from "react";

import Header from './components/Header';
import InitBoard from './components/InitBoard';
import Board from './components/Board';
import Footer from './components/Footer';

function App() {

  const [move, setMove] = useState("");
  const [score, setScore] = useState(0);
// 

  const board = move === "" ? <InitBoard setMove={setMove}></InitBoard> : 
              <Board move={move}  setMove={setMove} score={score} setScore={setScore}></Board>;
  return (
    <>
      <div className="main">
        <div className="content">
          <Header score={score}></Header>
          {board}      
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;