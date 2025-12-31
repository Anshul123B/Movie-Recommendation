import React from 'react';
import './MovieCard.css';

export default function MovieCard({ movie, index }) {
    return (
        <div
            className="movie-card glass-effect"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="movie-header">
                <div className="movie-rank">{index + 1}</div>
                <div className="movie-title-section">
                    <h3 className="movie-title">{movie.title}</h3>
                    <div className="movie-meta">
                        <span className="movie-year">{movie.year}</span>
                        <span className="movie-separator">•</span>
                        <span className="movie-genre">{movie.genre}</span>
                    </div>
                </div>
            </div>

            <p className="movie-description">{movie.description}</p>

            <div className="movie-match">
                <div className="match-icon">🎯</div>
                <div className="match-content">
                    <p className="match-label">Why it matches</p>
                    <p className="match-reason">{movie.matchReason}</p>
                </div>
            </div>
        </div>
    );
}
