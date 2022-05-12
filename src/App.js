import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';

export default function App() {
    return (
        <Router>
            <div>
                <Menu />
                <div className="page">
                    <Routes>
                        <Route path="/drift" element={<DriftPage />} />
                        <Route path="/timeattack" element={<TimeAttackPage />} />
                        <Route path="/forza" element={<ForzaPage />} />
                        <Route exact path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}