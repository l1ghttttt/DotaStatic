import React from 'react';
import '../../src/components/app-teams/app-teams.css'
import AppTeams from "../components/app-teams/App-teams";
import {useAppDispatch} from "../hooks/redux";

const TeamPage = () => {
    const dispatch = useAppDispatch()
    dispatch({type: 'TRUE'})
    dispatch({type: 'SETSLIDE', payload: '3'})
    return (
        <>
            <AppTeams/>
        </>
    );
};

export default TeamPage;