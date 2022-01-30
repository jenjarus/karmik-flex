import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editElementArr} from '../../actions';

const BoardButton = ({id}) => {
    const dispatch = useDispatch();
    const board = useSelector((store) => store.board);
    const classActive = board[id] ? ' active' : '';

    return (
        <>
            {(id % 17 === 0 && id !== 0) ? <br/> : ''}
            <span className={'board__button' + classActive} onClick={() => dispatch(editElementArr(id))}/>
        </>
    );
};

export default BoardButton;
