import React, { useState, useEffect } from 'react';
import Card from './Card';
import { easyCards, mediumCards, hardCards } from '../data/cards';

// main gameboard component
function GameBoard({ difficulty }) {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [incorrectCards, setIncorrectCards] = useState([]); // tracks temporarily incorrect cards

    // set up cards based on difficulty level
    useEffect(() => {
        // Helper function to shuffle an array
        const shuffleArray = (array) => {
            return array.sort(() => Math.random() - 0.5);
        };

        let selectedCards;
        switch (difficulty) {
            case 'Easy':
                selectedCards = shuffleArray(easyCards).slice(0, 4); // Randomly select 6 cards for Easy
                break;
            case 'Medium':
                selectedCards = shuffleArray(mediumCards).slice(0, 6); // Randomly select 10 cards for Medium
                break;
            case 'Hard':
                selectedCards = shuffleArray(hardCards).slice(0, 8); // Randomly select 16 cards for Hard
                break;
            default:
                selectedCards = shuffleArray(easyCards).slice(0, 3); // Default to Easy
        }

        
        const questionCards = selectedCards.map((card, index) => ({
            id: index * 2, // unique ID for the question card
            type: 'question', 
            content: card.question,
            matchId: index, // match ID
        }));

        const answerCards = selectedCards.map((card, index) => ({
            id: index * 2 + 1, // unique ID for the question card
            type: 'answer', 
            content: card.answer, 
            matchId: index, // match ID
        }));

        // combine and shuffle question and answer cards
        const gameCards = shuffleArray([...questionCards, ...answerCards]);

        setCards(gameCards);
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
        setIncorrectCards([]); // reset incorrect cards to face
    }, [difficulty]);

    // handle logic when two cards are flipped
    useEffect(() => {
        if (flippedCards.length === 2) {
            setMoves((prevMoves) => prevMoves + 1);
            const [firstCard, secondCard] = flippedCards;

            if (
                firstCard.matchId === secondCard.matchId &&
                firstCard.type !== secondCard.type
            ) {
                // if they match, add them to matched cards
                setMatchedCards((prev) => [...prev, firstCard, secondCard]);
                setFlippedCards([]);
            } else {
                // if they don't match, highlight them red before resetting
                setIncorrectCards([firstCard, secondCard]);
                setTimeout(() => {
                    setIncorrectCards([]);
                    setFlippedCards([]);
                }, 1000); // delay before flipping back
            }
        }
    }, [flippedCards]);

    // check if the game is complete
    useEffect(() => {
        if (matchedCards.length === cards.length && cards.length > 0) {
            const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
            savedScores.push({ moves, date: new Date().toLocaleString(), difficulty });
            localStorage.setItem('scores', JSON.stringify(savedScores));
            alert(`Congratulations! You completed the game in ${moves} moves.`);
        }
    }, [matchedCards]);

    // handle card click
    const handleCardClick = (card) => {
        if (
            flippedCards.length < 2 &&
            !flippedCards.includes(card) &&
            !matchedCards.includes(card) &&
            !incorrectCards.includes(card) // prevent clicking incorrect cards during reset
        ) {
            setFlippedCards((prev) => [...prev, card]);
        }
    };

    // render the gameboard
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    isFlipped={
                        flippedCards.includes(card) || matchedCards.includes(card)
                    }
                    isIncorrect={incorrectCards.includes(card)} // add incorrect logic
                    onClick={() => handleCardClick(card)}
                />
            ))}
        </div>
    );
}

export default GameBoard;
