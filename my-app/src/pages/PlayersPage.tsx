import * as React from "react";
import '../../src/components/app-players/app-players.css'
import AppPlayers from "../components/app-players/App-players";
import {useAppDispatch} from "../hooks/redux";

const PlayersPage = () => {
    const dispatch = useAppDispatch()
    dispatch({type: 'SETSLIDE', payload: '4'})
    dispatch({type: 'TRUE'})
    return (
        <AppPlayers/>
    );
};

export default PlayersPage;