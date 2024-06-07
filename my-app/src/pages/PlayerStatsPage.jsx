import React from 'react';
import '../../src/components/player-stats/player-stats.css'
import PlayerStats from "../components/player-stats/player-stats";
import {useDispatch} from "react-redux";

const PlayerStatsPage = () => {
    const dispatch = useDispatch();
    dispatch({type: 'FALSE'})
    dispatch({type: 'SETSLIDE', payload: '4'})
    return (
        <>
            <PlayerStats/>
        </>
    );
};

export default PlayerStatsPage;