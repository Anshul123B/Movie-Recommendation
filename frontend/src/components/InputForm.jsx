import React, { useState } from 'react';
import './InputForm.css';

export default function InputForm({ onSubmit, loading }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSubmit(input);
        }
    };

    const suggestions = [
        "Action movies with strong female leads",
        "Sci-fi films about time travel",
        "Heartwarming family dramas",
        "Psychological thrillers with plot twists",
        "Classic noir films from the 1940s"
    ];

    return (
        <div className="input-form-container">
            <div className="form-header">
                <h2>What kind of movies are you in the mood for?</h2>
                <p className="text-secondary">
                    Describe your preferences, mood, or favorite genres and let AI find the perfect matches
                </p>
            </div>

            <form onSubmit={handleSubmit} className="input-form">
                <div className="input-wrapper">
                    <textarea
                        id="movie-preferences"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="E.g., I want to watch something uplifting with great cinematography, maybe a coming-of-age story..."
                        rows="4"
                        disabled={loading}
                        className="input-field"
                    />
                    <button
                        type="submit"
                        disabled={loading || !input.trim()}
                        className="submit-button"
                    >
                        {loading ? (
                            <>
                                <span className="spinner"></span>
                                Generating...
                            </>
                        ) : (
                            <>
                                <span className="icon">✨</span>
                                Get Recommendations
                            </>
                        )}
                    </button>
                </div>
            </form>

            <div className="suggestions">
                <p className="suggestions-label">Try these:</p>
                <div className="suggestions-grid">
                    {suggestions.map((suggestion, index) => (
                        <button
                            key={index}
                            onClick={() => setInput(suggestion)}
                            className="suggestion-chip"
                            disabled={loading}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
