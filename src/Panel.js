import React, {useState} from 'react';
import PanelContent from './PanelContent';
import {screen1, screen2} from './data/data';
import './css/Panel.css';
import * as kidneyImg from './data/images/kidney.png';

function Panel(props) {
    console.log(props.data, kidneyImg.width);
    const [data, setData] = useState(screen1);
    const handleClick = () => {
        setData(screen2);
    }
    const {title, subtitle, description, btns} = data;
    let isDescription = false;
    if(description) isDescription = true;

    return (
        <div className='Panel'>
            <div className='Panel-container'>
                <h1 className='Panel-title'>{title}</h1>
                <p className='Panel-cancel'>Cancel</p>
            </div>
            <h3 className='Panel-subtitle'>{subtitle}</h3>
            <div className='Panel-container'>
                <PanelContent handleClick={handleClick}
                            isDescription={isDescription}
                            content={description || btns}/>
                <img src={kidneyImg} alt='Kidney'/>
            </div>
            
            
        </div>
    )
}

export default Panel;