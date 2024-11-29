import React from 'react';

// this component lets the user select the game difficulty
function DifficultySelector({ difficulty, setDifficulty }) {
    const difficulties = ['Easy', 'Medium', 'Hard']; // predefined difficulty levels

    return (
        <div className="flex justify-center mt-6">
            {difficulties.map((level) => (
                <button
                    key={level} // unique key for each button
                    className={`mx-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                        difficulty === level
                            ? 'bg-teal-600 text-white' // teal for active difficulty
                            : 'bg-white text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white' // hover styles
                    }`}
                    onClick={() => setDifficulty(level)} // update difficulty when clicked
                >
                    {level}
                </button>
            ))}
        </div>
    );
}

export default DifficultySelector;
