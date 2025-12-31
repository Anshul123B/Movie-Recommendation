import React from 'react';
import MovieCard from './MovieCard';
import './ResultsDisplay.css';

export default function ResultsDisplay({ results, userInput, onNewSearch }) {
    if (!results || results.length === 0) {
        return null;
    }

    return (
        <div className="results-container">
            <div className="results-header">
                <h2>Your Personalized Recommendations</h2>
                <p className="results-query">
                    Based on: <span className="query-text">"{userInput}"</span>
                </p>
                <button onClick={onNewSearch} className="new-search-button">
                    <span className="icon">🔄</span>
                    New Search
                </button>
            </div>

            <div className="movies-grid">
                {results.map((movie, index) => (
                    <MovieCard key={index} movie={movie} index={index} />
                ))}
            </div>
        </div>
    );
}
