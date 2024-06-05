import React from 'react';
import AppHeroes from "../components/app-heroes/App-heroes";
import '../../src/components/app-heroes/app-heroes.css'
import {useDispatch} from "react-redux";

const HeroesPage = () => {
    const dispatch = useDispatch();
    dispatch({type: 'TRUE'})
    return (
        <>
            <AppHeroes/>
        </>
    );
};

export default HeroesPage;