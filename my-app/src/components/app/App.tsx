import React, { lazy, Suspense } from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = lazy(() => import('../../pages/MainPage'));
const Hero = lazy(() => import('../../pages/HeroesPage'));
const HeroStats = lazy(() => import('../../pages/HeroStatsPage'));
const Team = lazy(() => import('../../pages/TeamPage'));
const Player = lazy(() => import('../../pages/PlayersPage'));
const PlayerStats = lazy(() => import('../../pages/PlayerStatsPage'));

const App = () => {
    const fallback = <div>Loading...</div>;

    return (
        <Router>
            <div className="app">
                <Suspense fallback={fallback}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/heroes" element={<Hero />} />
                        <Route path="/teams" element={<Team />} />
                        <Route path="/players" element={<Player />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
};

export default App;
