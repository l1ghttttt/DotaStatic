import React from 'react';
import '../../src/components/player-stats/player-stats.css'
import PlayerStats from "../components/player-stats/player-stats";
import {useDispatch} from "react-redux";

const PlayerStatsPage = () => {
    const dispatch = useDispatch();
    dispatch({type: 'FALSE'})
    return (
        <>
            <PlayerStats/>
        </>
    );
};

export default PlayerStatsPage;