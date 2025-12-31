import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultsDisplay';
import { recommendationAPI } from './services/api';
import './App.css';

export default function App() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (input) => {
        setLoading(true);
        setError(null);
        setUserInput(input);

        try {
            const data = await recommendationAPI.create(input);
            setResults(data.movies);
        } catch (err) {
            console.error('Error fetching recommendations:', err);
            setError(err.response?.data?.message || 'Failed to get recommendations. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleNewSearch = () => {
        setResults(null);
        setUserInput('');
        setError(null);
    };

    return (
        <div className="app">
            <div className="background-gradient"></div>
            <div className="background-pattern"></div>

            <header className="app-header">
                <div className="logo-container">
                    <span className="logo-icon">🎬</span>
                    <h1 className="logo-text">CineMatch</h1>
                </div>
                <p className="tagline">AI-Powered Movie Recommendations</p>
            </header>

            <main className="app-main container">
                {!results ? (
                    <div className="input-section">
                        <InputForm onSubmit={handleSubmit} loading={loading} />

                        {error && (
                            <div className="error-message">
                                <span className="error-icon">⚠️</span>
                                <p>{error}</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <ResultsDisplay
                        results={results}
                        userInput={userInput}
                        onNewSearch={handleNewSearch}
                    />
                )}
            </main>

            <footer className="app-footer">
                <p>Powered by OpenAI • Built with React & Fastify</p>
            </footer>
        </div>
    );
}
