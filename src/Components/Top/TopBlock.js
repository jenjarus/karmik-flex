import React from 'react';
import {useDispatch} from "react-redux";
import {resetBoard} from '../../actions';
import InputBoard from "./InputBoard";

const TopBlock = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="top__block">
                <InputBoard flag={'filler'} />
                <InputBoard flag={'active'} />
            </div>
            <div className="reset__box">
                <button className="btn" onClick={() => dispatch(resetBoard())}>Очистить доску</button>
            </div>
        </>
    );
};

export default TopBlock;
