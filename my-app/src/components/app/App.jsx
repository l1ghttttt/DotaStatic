import React, { lazy, Suspense } from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from "../app-header/App-header";
import {createStore} from "redux";
import {Provider} from "react-redux";

const Main = lazy(() => import('../../pages/MainPage'));
const Hero = lazy(() => import('../../pages/HeroesPage'));
const HeroStats = lazy(() => import('../../pages/HeroStatsPage'));
const Team = lazy(() => import('../../pages/TeamPage'));
const Player = lazy(() => import('../../pages/PlayersPage'));
const PlayerStats = lazy(() => import('../../pages/PlayerStatsPage'));

const App = () => {
    const fallback = <div>Loading...</div>;

    return (
        <div className="app">
            <Router>
                <AppHeader/>
                <Routes>
                    <Route path="/" element={
                        <Suspense fallback={fallback}>
                            <Main />
                        </Suspense>
                    } />
                    <Route path="/heroes" element={
                        <Suspense fallback={fallback}>
                            <Hero />
                        </Suspense>
                    } />
                    <Route path="/heroes/:heroId" element={
                        <Suspense fallback={fallback}>
                            <HeroStats />
                        </Suspense>
                    } />
                    <Route path="/teams" element={
                        <Suspense fallback={fallback}>
                            <Team />
                        </Suspense>
                    } />
                    <Route path="/players" element={
                        <Suspense fallback={fallback}>
                            <Player />
                        </Suspense>
                    } />
                    <Route path="/players/:playerId" element={
                        <Suspense fallback={fallback}>
                            <PlayerStats />
                        </Suspense>
                    } />
                </Routes>
            </Router>
        </div>
    );
};

export default App