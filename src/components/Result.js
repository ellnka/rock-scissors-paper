import React from 'react';

const Result = ({ result, playAgain }) => {
    return (
        <div className="result">
            <span>{ (result === "win") ? "You win" : (result === "lose") ? "You lose" : "Draw" } </span>
            <button className="play-again-btn" onClick={() => { playAgain(); } }>Play again</button>
        </div>
    );
}

export default Result;