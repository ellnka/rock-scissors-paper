import React, { useState, useEffect } from 'react';
import Result from './Result';

const Board = ({ choice, setChoice, score, setScore }) => {
    const [houseChoice, setHouseChoice] = useState("");
    const [result, setResult] = useState("");
  
    const getHouseChoice = () => {
      const items = ["rock", "scissors", "paper"];
      setHouseChoice(items[Math.floor(Math.random() * 3)]);
    };

    const playAgain = () => {
        setChoice("");
        setResult("");
        setHouseChoice("");
    };
  
    useEffect(() => { getHouseChoice(); }, []);
    useEffect(() => { getResult(); }, [houseChoice]);
  
    const getResult = () => {
      if (houseChoice === "") {
          return;
      }

      const winner = (choice === "rock" && houseChoice === "scissors") 
                      || (choice === "scissors" && houseChoice === "paper")
                      || (choice === "paper" && houseChoice === "rock");
  
      if (choice === houseChoice) {
          setResult("draw");
      } else if (winner) {
          setResult("win");
          setScore(score + 1);
      } else {
          setResult("lose");
          if (score > 0) {
            setScore(score - 1);
          }
      }
    };

    return (
        <div className="board">
            <div className="play-step">
            <div className="board__row">
                    <div className="label">You picked</div>
                    <div className="label">The House picked</div>
                </div>
                <div className="board__row board__row--picked">
                    <div className={`item item--${choice} ${result==="win"?"item--winner":""}`}><div className="icon"></div></div>
                    <div className={`item item--${houseChoice || "empty"} ${result==="lose"?"item--winner":""}`}><div className="icon"></div></div>
                </div>
            </div>
            { result && <Result result={result} playAgain={playAgain}></Result>}
        </div>
    );
}

export default Board;