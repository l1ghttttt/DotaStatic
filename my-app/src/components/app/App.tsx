import React from 'react';
import './app.css'
import axios from 'axios'
import AppHeader from "../app-header/App-header";
import AppHeroes from "../app-heroes/App-heroes";

const App = () => {


    axios.get('https://api.opendota.com/api/heroStats')
        .then(res => console.log(res.data))

    return (
        <div className="app">
            <AppHeader/>
            <AppHeroes/>
        </div>
    );
};

export default App;