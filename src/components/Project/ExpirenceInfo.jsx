import React from 'react';
import "./ExpirienceInfo.css";

function ExpirenceInfo({ number, text }) {
    return (
        <div id="infoTag">
            <div id="yearTag">{number}</div>
            <div id="textTag">{text}</div>
        </div>
    );
}

export default ExpirenceInfo;