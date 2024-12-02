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
                    Calc 2 Function Matching Game
                </h1>
            </header>

            {/* main content section containing the difficulty selector and gameboard */}
            <main className="flex-grow container mx-auto p-4">

                <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />

                <GameBoard difficulty={difficulty} />
            </main>


            <Leaderboard />

            {/* footer section for credits */}
            <footer className="bg-gray-200 py-4 text-center">
                <p className="text-sm text-gray-600">Jacob Kobrick - MAT 266</p>
            </footer>
        </div>
    );
}

// export app as the root component of the project
export default App;
