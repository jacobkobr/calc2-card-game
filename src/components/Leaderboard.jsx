import React, { useEffect, useState } from 'react';

// leaderboard displays the top scores saved in localStorage
function Leaderboard() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
        setScores(savedScores.sort((a, b) => a.moves - b.moves));
    }, []);

    return (
        <div className="mt-8 container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4 text-teal-700">Leaderboard</h2>
            <table className="min-w-full bg-white rounded-lg shadow-lg">
                <thead>
                <tr>
                    <th className="py-2 px-4 bg-teal-600 text-white">Rank</th>
                    <th className="py-2 px-4 bg-teal-600 text-white">Moves</th>
                    <th className="py-2 px-4 bg-teal-600 text-white">Difficulty</th>
                    <th className="py-2 px-4 bg-teal-600 text-white">Date</th>
                </tr>
                </thead>
                <tbody>
                {scores.slice(0, 10).map((score, index) => (
                    <tr
                        key={index}
                        className={`text-center ${
                            index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                        }`}
                    >
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{score.moves}</td>
                        <td className="border px-4 py-2">{score.difficulty}</td>
                        <td className="border px-4 py-2">{score.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
