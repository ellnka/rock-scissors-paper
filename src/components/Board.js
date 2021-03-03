import React, { useState, useEffect } from 'react';
import Result from './Result';

const Board = ({ move, setMove, score, setScore }) => {
    const [house, setHouse] = useState("");
    const [result, setResult] = useState("");
  
    const houseMove = () => {
      const items = ["rock", "scissors", "paper"];
      setHouse(items[Math.floor(Math.random() * 3)]);
    };

    const playAgain = () => {
        setMove("");
        setResult("");
        setHouse("");
    };
  
    useEffect(() => { houseMove(); }, []);
    useEffect(() => { getResult(); }, [house]);
  
    const getResult = () => {
      if (house === "") {
          return;
      }

      const winner = (move === "rock" && house === "scissors") 
                      || (move === "scissors" && house === "paper")
                      || (move === "paper" && house === "rock");
  
      if (move === house) {
          setResult("draw");
      } else if (winner) {
          setResult("win");
          setScore(score + 1);
      } else {
          setResult("lose");
          setScore(score - 1);
      }
    };

    return (
        <div className="board">
            <div className="play-step">
            { result && <Result result={result} playAgain={playAgain}></Result>}
            <div className="board__row">
                    <div className="label">You picked</div>
                    <div className="label">The House picked</div>
                </div>
                <div className="board__row board__row--picked">
                    <div className={`item item--${move} ${result==="win"?"item--winner":""}`}><div className="icon"></div></div>
                    <div className={`item item--${house || "empty"} ${result==="lose"?"item--winner":""}`}><div className="icon"></div></div>
                </div>
            </div>
        </div>
    );
}

export default Board;