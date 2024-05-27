import React, {useEffect, useState} from 'react';
import './app-players.css'
import axios from "axios";
import TeamsPagination from "../teams-pagination/teams-pagination";
import PlayersList from "../players-list/players-list";

const AppPlayers = () => {

    const [players, setPlayers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const playersPerPage = 45

    useEffect(() => {
        const getPlayers = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://api.opendota.com/api/proPlayers');
                setPlayers(res.data);
            } catch (error) {
                console.error("Ошибка при получении команд:", error);
            } finally {
                setLoading(false);
            }
        };
        getPlayers();
    }, [])

    const lastPlayerIndex = currentPage * playersPerPage;
    const firstPlayerIndex = lastPlayerIndex - playersPerPage;
    const currentPlayers = players.slice(firstPlayerIndex, lastPlayerIndex);
    const Paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <main className="players">
            <TeamsPagination teamsPerPage={playersPerPage} totalTeams={players.length} Paginate = {Paginate} currentPage = {currentPage}/>
            <PlayersList players={currentPlayers}  loading={loading}/>
            <TeamsPagination teamsPerPage={playersPerPage} totalTeams={players.length} Paginate = {Paginate} currentPage = {currentPage}/>
        </main>
    );
};

export default AppPlayers;