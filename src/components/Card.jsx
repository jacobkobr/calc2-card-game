import React from 'react';
import { BlockMath } from 'react-katex';

// single card component
function Card({ card, isFlipped, isIncorrect, onClick }) {
    return (
        <div
            className={`card-container ${isIncorrect ? 'incorrect' : ''}`} // apply incorrect class if needed
            onClick={onClick}
        >
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                {/* front of the card (question mark) */}
                <div className="card-face card-front">
                    <p>?</p>
                </div>
                {/* back of the card (equation) */}
                <div className="card-face card-back">
                    <BlockMath math={card.content} errorColor="#cc0000" />
                </div>
            </div>
        </div>
    );
}

export default Card;
