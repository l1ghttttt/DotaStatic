import React from 'react';
import '../../src/components/app-teams/app-teams.css'
import AppTeams from "../components/app-teams/App-teams";
import {useDispatch} from "react-redux";

const TeamPage = () => {
    const dispatch = useDispatch();
    dispatch({type: 'TRUE'})
    return (
        <>
            <AppTeams/>
        </>
    );
};

export default TeamPage;