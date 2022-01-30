import React from 'react';
import BoardButton from './BoardButton';

const Board = () => {
    const creatArrayButton = () => {
        let arrButtons = [];
        for(let i = 0; i <= 67; i++) {
            arrButtons.push(<BoardButton key={i} id={i}/>)
        }
        return arrButtons;
    };

    const arrButtons = creatArrayButton();

    return (
        <div className="board">
            {arrButtons.map(el => el)}
        </div>
    );
};

export default Board;
