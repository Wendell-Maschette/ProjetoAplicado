import React, { useState } from 'react';
import { DropdownIcon } from '../../helpers/svg-bundle';
import './styles.css';

export default function Dropdown(props) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        return setShowAnswer(!showAnswer);
    }

    return (
        <div className="wrapper-dropdown">
            <button className="dropdown-btn" onClick={handleClick}>
                <p className="dropdown-question font font-24">{props.question}</p> <DropdownIcon className="dropdown-icon"/>
            </button>
            {showAnswer ?
                <div className="dropdown-answer">
                    <p className="font font-24" style={{textAlign: 'center'}}>
                        {props.answer}
                    </p>
                </div> : ""
            }
        </div>
    )
}
