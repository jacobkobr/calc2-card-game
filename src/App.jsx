import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Leaderboard from './components/Leaderboard';
import DifficultySelector from './components/DifficultySelector';
import githubLogo from './assets/githubicon.png';

function App() {
    const [difficulty, setDifficulty] = useState('Easy'); // stores the selected difficulty level
    const [showInstructions, setShowInstructions] = useState(false); // toggles "How to Play" visibility
    const [darkMode, setDarkMode] = useState(() => {
        const savedPreference = localStorage.getItem('darkMode');
        return savedPreference === 'true'; // loads saved dark mode preference
    });

    // save dark mode preference in localStorage
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        // dynamically set the class on the <html> element for global styling
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
            <header className="bg-teal-700 py-6 dark:bg-gray-800">
                <h1 className="text-4xl font-bold text-center text-white">
                    Function Flip
                </h1>
            </header>

            <main className="flex-grow container mx-auto p-4">

                <div className="text-center mb-4">
                    <button
                        onClick={() => setShowInstructions(!showInstructions)}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-lg"
                    >
                        {showInstructions ? 'Hide Instructions' : 'How to Play'}
                    </button>
                </div>

                {showInstructions && (
                    <div className="bg-white text-gray-700 rounded-lg shadow-md p-4 mb-4 dark:bg-gray-800 dark:text-white">
                        <h2 className="text-lg font-bold mb-2">How to Play</h2>
                        <ul className="list-disc pl-5">
                            <li>Match integrals with their corresponding solutions or derivatives with their matching expressions.</li>
                            <li>Easy: Match 4 cards.</li>
                            <li>Medium: Match 6 cards.</li>
                            <li>Hard: Match 8 cards.</li>
                            <li>Scores are saved in the leaderboard for future reference.</li>
                        </ul>
                    </div>
                )}

                <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
                <GameBoard difficulty={difficulty} />
            </main>

            <Leaderboard />

            <footer className="bg-gray-200 py-4 text-center dark:bg-gray-800 dark:text-gray-400">
                <p className="text-sm text-gray-600 flex justify-center items-center gap-2 dark:text-gray-300">
                    Jacob Kobrick - MAT 266
                    <span className="flex items-center">
                        -
                        <a
                            href="https://github.com/jacobkobr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <img
                                src={githubLogo}
                                alt="GitHub"
                                className="w-5 h-5 ml-2"
                            />
                        </a>
                    </span>
                </p>
                {/* dark mode toggle button */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white font-semibold px-4 py-2 rounded-lg mt-4"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </footer>
        </div>
    );
}

export default App;
