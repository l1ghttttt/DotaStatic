import * as React from "react";
import '../../src/components/app-heroStats/app-heroStats.css'
import AppHeroStats from "../components/app-heroStats/App-heroStats";
import {useAppDispatch} from "../hooks/redux";

const HeroStatsPage = () => {
    const dispatch = useAppDispatch()
    dispatch({type: 'FALSE'})
    dispatch({type: 'SETSLIDE', payload: '2'})
    return (
        <AppHeroStats/>
    );
};

export default HeroStatsPage;