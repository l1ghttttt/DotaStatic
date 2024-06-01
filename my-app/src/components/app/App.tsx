import React from 'react';
import './app.css'
import AppHeader from "../app-header/App-header";
import AppHeroes from "../app-heroes/App-heroes";
import AppHeroStats from "../app-heroStats/app-heroStats";
import AppTeams from "../app-teams/App-teams";
import AppPlayers from "../app-players/app-players";
import PlayerStats from "../player-stats/player-stats";

const App = () => {
    return (
        <div className="app">
            <PlayerStats/>
        </div>
    );
};

export default App;