import React, { useEffect, useState } from "react";

const Game = ({ score, move, setScore }) => {
  const [house, setHouse] = useState("");
  const [result, setResult] = useState("");

  const houseMove = () => {
    const items = ["rock", "scissors", "paper"];
    setHouse(items[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => { houseMove(); }, []);
  useEffect(() => { Result(); }, [house]);

  const Result = () => {
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
    <div className="result">
    <span>{ (result === "win") ? "You win" : (result === "lose") ? "You lose" : "Draw" } </span>
    <button className="play-again-btn" onClick={() => setHouse()}>Play again</button>
</div>
  );
};

export default Game;