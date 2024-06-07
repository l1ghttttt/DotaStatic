import React from 'react';
import '../../src/components/app-players/app-players.css'
import AppPlayers from "../components/app-players/app-players";
import {useDispatch} from "react-redux";

const PlayersPage = () => {
    const dispatch = useDispatch();
    dispatch({type: 'SETSLIDE', payload: '4'})
    dispatch({type: 'TRUE'})
    return (
        <>
            <AppPlayers/>
        </>
    );
};

export default PlayersPage;