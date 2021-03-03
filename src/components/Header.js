import React from 'react';

const Header = ({ score }) => {
    return (
        <div className="header">
            <div className="title">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </div>

            <div className="score">
                <div className="score__title">Score</div>
                <div className="score__value">{score}</div>
            </div>
        </div> 
    );
}

export default Header;