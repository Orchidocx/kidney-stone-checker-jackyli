import React from 'react';
import './css/PanelContent.css';

export default function PanelContent(props) {
    const {isDescription, content, handleClick} = props;

    const alertFunction = () => {
        alert("I'm done!");
    }
    let data;
    if(isDescription) {
        data = content.map((paragraph) => 
            <p>{paragraph}</p>
        )
    } else {
        data = content.map((btn) => 
            <button onClick={alertFunction} className='PanelContent-selection'>{btn}</button>
        )
    }
    return (
        <div className='PanelContent'>
            {data}
            {isDescription && 
                <button className='PanelContent-button'
                        onClick={handleClick}>
                            Get Started
                </button>
            }
        </div>
    )
}
