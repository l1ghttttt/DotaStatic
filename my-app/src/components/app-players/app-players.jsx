import React, {useEffect, useRef, useState} from 'react';
import './app-players.css';
import axios from "axios";
import TeamsPagination from "../teams-pagination/teams-pagination";
import PlayersList from "../players-list/players-list";

const AppPlayers = () => {

    const [players, setPlayers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [term, setTerm] = useState("");
    const playersPerPage = 45;
    const mainRef = useRef(null);

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

        if (mainRef.current !== null) {
            mainRef.current.style.minHeight = `${window.innerHeight}px`;
        }
    }, []);

    const lastPlayerIndex = currentPage * playersPerPage;
    const firstPlayerIndex = lastPlayerIndex - playersPerPage;
    let currentPlayers = players.slice(firstPlayerIndex, lastPlayerIndex);

    if (term) {
        currentPlayers = players.filter(player =>
            player.personaname && player.personaname.toLowerCase().includes(term.toLowerCase()) || player.team_name.toLowerCase().includes(term.toLowerCase())
        );
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const searchHandler = e => {
        setTerm(e.target.value);
    };

    return (
        <main className="players" ref={mainRef}>
            <h3>Players</h3>
            <form action="">
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Название" name="name" id='name' required
                           onChange={searchHandler}/>
                    <label htmlFor="name" className="form__label">Никнейм/команда</label>
                </div>
            </form>
            {term ? null :
                <TeamsPagination teamsPerPage={playersPerPage} totalTeams={players.length} Paginate={paginate}
                                 currentPage={currentPage}/>}
            <PlayersList players={currentPlayers} loading={loading}/>
            {term ? null :
                <TeamsPagination teamsPerPage={playersPerPage} totalTeams={players.length} Paginate={paginate}
                                 currentPage={currentPage}/>}
        </main>
    );
};

export default AppPlayers;