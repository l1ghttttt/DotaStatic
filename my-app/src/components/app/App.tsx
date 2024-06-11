import { lazy, Suspense } from 'react';
import * as React from "react";
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from "../app-header/App-header";
import {Provider} from "react-redux";
import { store } from '../store/store';

const Main = lazy(() => import('../../pages/MainPage'));
const Hero = lazy(() => import('../../pages/HeroesPage'));
const HeroStats = lazy(() => import('../../pages/HeroStatsPage'));
const Team = lazy(() => import('../../pages/TeamPage'));
const Player = lazy(() => import('../../pages/PlayersPage'));
const PlayerStats = lazy(() => import('../../pages/PlayerStatsPage'));
const Stats = lazy(() => import('../../pages/AppStatsPage'));

const App = () => {
    const fallback = <div>Loading...</div>;
    const initialState = {
        display: true,
        Arrow: false,
        opacity: true,
        slide: `1`,
    }

    return (
        <div className="app">Я
            <Provider store={store}>
            <Router>
                {initialState.display ? <AppHeader/> : null}
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
                    <Route path="/stats" element={
                        <Suspense fallback={fallback}>
                            <Stats />
                        </Suspense>
                    } />
                </Routes>
            </Router>
            </Provider>
        </div>
    );
};

export default App