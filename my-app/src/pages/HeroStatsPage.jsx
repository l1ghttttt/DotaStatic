import React from 'react';
import '../../src/components/app-heroStats/app-heroStats.css'
import AppHeroStats from "../components/app-heroStats/app-heroStats";
import {useDispatch} from "react-redux";

const HeroStatsPage = () => {
    const dispatch = useDispatch();
    dispatch({type: 'FALSE'})
    return (
        <>
            <AppHeroStats/>
        </>
    );
};

export default HeroStatsPage;