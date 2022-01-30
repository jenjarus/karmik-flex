import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editFillerEmote, editActiveEmote} from '../../actions';

const InputBoard = ({flag}) => {
    const dispatch = useDispatch();
    const fillerEmote = useSelector((store) => store.fillerEmote);
    const activeEmote = useSelector((store) => store.activeEmote);
    let funcAction, labelText, initVal;

    if(flag === 'filler') {
        funcAction = (e) => dispatch(editFillerEmote(e.target.value.trim()));
        labelText = 'Заполнитель';
        initVal = fillerEmote;
    } else if (flag === 'active') {
        funcAction = (e) => dispatch(editActiveEmote(e.target.value.trim()));
        labelText = 'Основной';
        initVal = activeEmote;
    }

    return (
        <div className="input-board">
            <label htmlFor={flag}>{labelText}</label>
            <input id={flag} defaultValue={initVal} type="text" className={"input"} onChange={(e) => funcAction(e)}/>
        </div>
    );
};

export default InputBoard;
