import React from 'react';
import './app.css'
import AppHeader from "../app-header/App-header";
import AppHeroes from "../app-heroes/App-heroes";

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <AppHeroes/>
        </div>
    );
};

export default App;