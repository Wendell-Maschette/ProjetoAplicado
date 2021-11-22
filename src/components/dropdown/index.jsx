import React, { useState } from 'react';
import './styles.css';

export default function Dropdown(props) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        return setShowAnswer(!showAnswer);
    }

    return (
        <div className="wrapper-dropdown">
            <button className="dropdown-btn font font-24" onClick={handleClick}>
                {props.question}
            </button>
            {showAnswer ?
                <div className="dropdown-answer">
                    <p >
                        {props.answer}
                    </p>
                </div> : ""
            }
        </div>
    )
}
