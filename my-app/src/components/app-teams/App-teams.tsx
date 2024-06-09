import * as React from 'react';
import './app-teams.css'
import {useEffect, useState} from "react";
import axios from "axios";
import TeamsList from "../teams-list/Teams-list";
import TeamsPagination from "../teams-pagination/Teams-pagination";
import {useDispatch} from "react-redux";


const AppTeams = () => {
    const dispatch = useDispatch();
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [term, setTerm] = useState("");
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
    let currentTeams = teams.slice(firstTeamIndex, lastTeamIndex);

    const Paginate = pageNumber => setCurrentPage(pageNumber)

    if (term) {
        currentTeams = teams.filter(team =>
            team.name && team.name.toLowerCase().includes(term.toLowerCase())
        );
    }

    const searchHandler = e => {
        setTerm(e.target.value);
    };

    if (loading) {
        dispatch({type: `ARRFALSE`});
        return <span style={{position: `absolute`, top: `calc(100% - 200px)`}} className="loader"></span>;
    }
    if (!loading) {
        dispatch({type: `ARRTRUE`});
        dispatch({type: `OPATRUE`});
    }

    return (
        <main className={"teams"}>
            <h3 className={"teams__name"}>Teams</h3>
            <form action="">
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Название" name="name" id='name' required onChange={searchHandler}/>
                    <label htmlFor="name" className="form__label">Название</label>
                </div>
            </form>
            {term ? null :
                <TeamsPagination teamsPerPage={teamsPerPage} totalTeams={teams.length} Paginate={Paginate}
                                 currentPage={currentPage}/>}
            <TeamsList teams={currentTeams} loading={loading}/>
            {term ? null :
                <TeamsPagination teamsPerPage={teamsPerPage} totalTeams={teams.length} Paginate={Paginate}
                                 currentPage={currentPage}/>}
        </main>
    );
}

export default AppTeams;