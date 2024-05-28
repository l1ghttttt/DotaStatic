import React from 'react';
import './app.css'
import AppHeader from "../app-header/App-header";
import AppHeroes from "../app-heroes/App-heroes";
import AppNews from "../app-news/App-news";
import AppTeams from "../app-teams/App-teams";
import AppPlayers from "../app-players/app-players";

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <AppPlayers/>
        </div>
    );
};

export default App;