import React from 'react';
import '../../src/components/player-stats/player-stats.css'
import PlayerStats from "../components/player-stats/Player-stats.tsx";
import {useAppDispatch} from "../hooks/redux";

const PlayerStatsPage = () => {
    const dispatch = useAppDispatch()
    dispatch({type: 'FALSE'})
    dispatch({type: 'SETSLIDE', payload: '4'})
    return (
        <>
            <PlayerStats/>
        </>
    );
};

export default PlayerStatsPage;