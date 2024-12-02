import React from 'react';
import { BlockMath } from 'react-katex';

// single card component
function Card({ card, isFlipped, isIncorrect, onClick }) {
    return (
        <div
            className={`card-container ${isIncorrect ? 'incorrect' : ''}`} // apply incorrect class if necessaryu
            onClick={onClick}
        >
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>

                <div className="card-face card-front">
                    <p>?</p>
                </div>

                <div className="card-face card-back">
                    <BlockMath math={card.content} errorColor="#cc0000" />
                </div>
            </div>
        </div>
    );
}

export default Card;
