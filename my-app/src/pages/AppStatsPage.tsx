import * as React from "react";
import AppStats from "../components/App-Stats/AppStats";
import {useAppDispatch} from "../hooks/redux";

const AppStatsPage = () => {
    const dispatch = useAppDispatch()
    dispatch({type: 'FALSE'})
    return (
        <AppStats/>
    );
};

export default AppStatsPage;