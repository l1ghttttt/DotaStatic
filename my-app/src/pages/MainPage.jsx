import React from 'react';
import AppNews from "../components/app-news/App-news";
import '../../src/components/app-news/app-news.css'
import {useDispatch} from "react-redux";

const MainPage = () => {
    const dispatch = useDispatch();
    dispatch({type: 'TRUE'})
    dispatch({type: 'SETSLIDE', payload: '1'})
    return (
        <>
            <AppNews/>
        </>
    );
};

export default MainPage;