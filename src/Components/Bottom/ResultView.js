import React from 'react';
import {useSelector} from "react-redux";

const ResultView = ({refs}) => {
    const board = useSelector((store) => store.board);
    const fillerEmote = useSelector((store) => store.fillerEmote);
    const activeEmote = useSelector((store) => store.activeEmote);
    const result = board.map(el => el ? activeEmote : fillerEmote).join(' ');


    return (
        <textarea value={result} ref={refs} readOnly />
    );
};

export default ResultView;
