import * as React from "react";
import AppHeroes from "../components/app-heroes/App-heroes";
import '../../src/components/app-heroes/app-heroes.css'
import {useAppDispatch} from "../hooks/redux";

const HeroesPage = () => {
    const dispatch = useAppDispatch()
    dispatch({type: 'SETSLIDE', payload: '2'})
    dispatch({type: 'TRUE'})
    return (
        <AppHeroes/>
    );
};

export default HeroesPage;