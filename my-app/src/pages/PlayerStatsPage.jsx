import React from 'react';
import '../../src/components/player-stats/player-stats.css'
import PlayerStats from "../components/player-stats/player-stats";
import {useParams} from "react-router-dom";

const PlayerStatsPage = () => {
    const {playerId} = useParams();

    return (
        <>
            <PlayerStats id={playerId}/>
        </>
    );
};

export default PlayerStatsPage;