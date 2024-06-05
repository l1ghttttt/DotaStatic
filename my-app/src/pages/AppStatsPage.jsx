import React from 'react';
import AppStats from "../components/App-Stats/AppStats";
import {useDispatch} from "react-redux";

const AppStatsPage = () => {
    const dispatch = useDispatch();
    dispatch({type: 'FALSE'})
    return (
        <AppStats/>
    );
};

export default AppStatsPage;