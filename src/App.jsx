import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import Leaderboard from './components/Leaderboard';
import DifficultySelector from './components/DifficultySelector';

// app serves as the main component that ties everything together
function App() {
    const [difficulty, setDifficulty] = useState('Easy'); // stores the selected difficulty level

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* header section with the game title */}
            <header>
                <h1 className="text-4xl font-bold text-center text-white">
                    Function Flip
                </h1>
            </header>

            {/* main content section containing the difficulty selector and gameboard */}
            <main className="flex-grow container mx-auto p-4">

                <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty}/>

                <GameBoard difficulty={difficulty}/>
            </main>


            <Leaderboard/>

            {/* footer section for credits */}
            <footer className="bg-gray-200 py-4 text-center">
                <p className="text-sm text-gray-600 flex justify-center items-center gap-2">
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
                    src="/githubicon.png"
                    alt="GitHub"
                    className="w-5 h-5 ml-2 align-middle"
                />
            </a>
        </span>
                </p>
            </footer>
        </div>
    );
}

// export app as the root component of the project
export default App;
