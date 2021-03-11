import React from 'react';

const InitBoard = ({ setChoice }) => {
    
    const clickItem = (e) => {
        const itemEl = e.target.closest('.item');
        setChoice(itemEl.dataset.id);
    };


    return (
        <div className="board board--triangle">
            <div className="init-step">
                <div className="board__row">
                    <div className="item item--scissors" data-id="scissors" onClick={clickItem}><div className="icon"></div></div>
                    <div className="item item--paper" data-id="paper" onClick={clickItem}><div className="icon"></div></div>
                </div>

                <div className="board__row board__row--last">
                    <div className="item item--rock" data-id="rock" onClick={clickItem}><div className="icon"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InitBoard;