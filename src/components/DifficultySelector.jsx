import React from 'react';

function DifficultySelector({ difficulty, setDifficulty }) {
    const difficulties = ['Easy', 'Medium', 'Hard']; // predefined difficulty levels

    return (
        <div className="flex justify-center mt-6">
            {difficulties.map((level) => (
                <button
                    key={level} // unique key for each button
                    className={`mx-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                        difficulty === level
                            ? 'bg-teal-600 text-white' 
                            : 'bg-white text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white' // hover styles
                    }`}
                    onClick={() => setDifficulty(level)} 
                >
                    {level}
                </button>
            ))}
        </div>
    );
}

export default DifficultySelector;
