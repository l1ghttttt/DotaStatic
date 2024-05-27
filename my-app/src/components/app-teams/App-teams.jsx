import * as React from 'react';
import './app-teams.css'
import {useEffect, useState} from "react";
import axios from "axios";
import TeamsList from "../teams-list/Teams-list";
import TeamsPagination from "../teams-pagination/teams-pagination";


function AppTeams() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const teamsPerPage = 50

    useEffect(() => {
        const getTeams = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://api.opendota.com/api/teams');
                // Добавляем номер к каждой команде
                const numberedTeams = res.data.map((team, index) => ({
                    ...team,
                    number: index + 1, // Индексация начинается с 0, поэтому добавляем 1
                }));
                setTeams(numberedTeams);
            } catch (error) {
                console.error("Ошибка при получении команд:", error);
            } finally {
                setLoading(false);
            }
        };
        getTeams();
    }, []);


    const lastTeamIndex = currentPage * teamsPerPage;
    const firstTeamIndex = lastTeamIndex - teamsPerPage;
    const currentTeams = teams.slice(firstTeamIndex, lastTeamIndex);

    const Paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <main className={"teams"}>
            <h3 className={"teams__name"}>Teams</h3>
            <TeamsPagination teamsPerPage = {teamsPerPage} totalTeams={teams.length} Paginate = {Paginate} currentPage = {currentPage} />
            <TeamsList teams={currentTeams} loading={loading} />
            <TeamsPagination teamsPerPage = {teamsPerPage} totalTeams={teams.length} Paginate = {Paginate} currentPage = {currentPage} />
        </main>
    );
}

export default AppTeams;