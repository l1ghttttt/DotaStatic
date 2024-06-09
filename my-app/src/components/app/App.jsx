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
const Stats = lazy(() => import('../../pages/AppStatsPage'));

const App = () => {
    const initialState = {
        display: true,
        Arrow: false,
        opacity: true,
        slide: `1`,
    }
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'TRUE':
                return {...state, display: true}
            case 'FALSE':
                return {...state, display: false}
            case 'ARRTRUE':
                return {...state, Arrow: true}
            case 'ARRFALSE':
                return {...state, Arrow: false}
            case 'OPATRUE':
                return {...state, opacity: true}
            case 'OPAFALSE':
                return {...state, opacity: false}
            case 'SETSLIDE':
                return {...state, slide: action.payload}
            default:
                return state;
        }
    }

    const store = createStore(reducer);
    const fallback = <div>Loading...</div>;

    return (
        <div className="app">
            <Provider store={store}>
            <Router>
                {initialState.display ? <AppHeader slide={initialState.slide}/> : null}
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