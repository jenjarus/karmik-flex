import React from 'react';
import {useSelector} from "react-redux";

const CountResult = () => {
    const board = useSelector((store) => store.board);
    const fillerEmote = useSelector((store) => store.fillerEmote);
    const activeEmote = useSelector((store) => store.activeEmote);
    const result = board.map(el => el ? activeEmote : fillerEmote).join(' ');

    const limit = 450;
    const boardLenght = result.length;
    const classLimit = boardLenght > limit ? ' error' : ' success';

    return (
        <div className={"count__box" + classLimit}>
            Допустимое количество символов: {limit}. Текущее количество: {boardLenght}
        </div>
    );
};

export default CountResult;
