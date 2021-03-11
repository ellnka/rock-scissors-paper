
import React, { useState } from "react";

import Header from './components/Header';
import InitBoard from './components/InitBoard';
import Board from './components/Board';
import Footer from './components/Footer';

function App() {

  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
// 

  const board = choice === "" ? <InitBoard setChoice={setChoice}></InitBoard> : 
              <Board choice={choice}  setChoice={setChoice} score={score} setScore={setScore}></Board>;
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