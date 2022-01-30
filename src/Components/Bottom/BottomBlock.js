import React, {useRef} from 'react';
import ResultView from "./ResultView";

const TopBlock = () => {
    const textAreaRef = useRef(null);

    const copyFunc = () => {
        if (navigator.clipboard != undefined) { //Chrome
            navigator.clipboard.writeText(textAreaRef.current.value).then(function () {
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
        }
        else if(window.clipboardData) { // Internet Explorer
            window.clipboardData.setData("Text", textAreaRef.current.value);
        }
    };

    return (
        <div className="bottom__block">
            <button className="btn" onClick={copyFunc}>Скоприровать</button>
            <ResultView refs={textAreaRef} />
        </div>
    );
};

export default TopBlock;
