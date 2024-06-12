import {useState, useRef, useEffect} from "react";
import * as React from "react";
import './app-players.css';
import axios from "axios";
import PlayersList from "../players-list/Players-list";
import TeamsPagination from "../teams-pagination/Teams-pagination";
import {useAppDispatch} from "../../hooks/redux";

const AppPlayers = () => {
    const dispatch = useAppDispatch()
    const [players, setPlayers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [term, setTerm] = useState("");
    const playersPerPage = 45;
    const [selected, setSelected] = useState(`all`);
    const mainRef = useRef(null);
    const selectRef = useRef(null);
    const playerRef = useRef(null);
    const textRef = useRef(null);

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

    useEffect(() => {
        if (!textRef ||!textRef.current) return

        const ObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const Observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (playerRef.current) {
                    playerRef.current.style.transform = "translateY(0px)";
                    playerRef.current.style.opacity = "1";
                }
            }
        }, ObserverOptions);
        if (textRef.current) {
            Observer.observe(textRef.current);
        }

        return () => {
            Observer.disconnect()
        }
    }, [loading]);

    const lastPlayerIndex = currentPage * playersPerPage;
    const firstPlayerIndex = lastPlayerIndex - playersPerPage;
    let currentPlayers = players.slice(firstPlayerIndex, lastPlayerIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const searchHandler = e => {
        setTerm(e.target.value);
    };

    const selectHandler = (e) => {
        setSelected(e.target.value);
    }

    if (selectRef.current !== null) {
        if (term || selectRef.current.value !== "all") {
            currentPlayers = players.filter(player =>
                player.personaname && player.personaname.toLowerCase().includes(term.toLowerCase()) || player.team_name.toLowerCase().includes(term.toLowerCase())
            );
            if (selectRef.current.value !== "all") {
                currentPlayers = currentPlayers.filter(player =>
                    player.fantasy_role === Number(selectRef.current.value)
                )
            }
        }
    }
    if (loading) {
        dispatch({type: `ARRFALSE`});
        return <span style={{position: `absolute`, top: `calc(100% - 200px)`}} className="loader"></span>;
    }
    if (!loading) {
        dispatch({type: `ARRTRUE`});
        dispatch({type: `OPATRUE`});
    }

    return (
        <main className="players" ref={mainRef}>
            <div className={`players__text`} ref={textRef}>
                <h3 ref={playerRef}>Players</h3>
            </div>
            <form action="">
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Название" name="name" id='name' required onChange={searchHandler}/>
                    <label htmlFor="name" className="form__label">Никнейм/команда</label>
                </div>
                <select name="selectedRoles" defaultValue={`all`} ref={selectRef} onChange={selectHandler} className="players__select">
                    <option value="all">Все роли</option>
                    <option value="1">Carry</option>
                    <option value="2">Mid</option>
                    <option value="3">Hard</option>
                    <option value="4">Support</option>
                    <option value="5">Full Support</option>
                </select>
            </form>
            {term || selected !== `all` ? null : <TeamsPagination teamsPerPage={playersPerPage} totalTeams={players.length} Paginate={paginate} currentPage={currentPage}/>}
            <PlayersList players={currentPlayers} loading={loading}/>
            {term || selected !== `all` ? null : <TeamsPagination teamsPerPage={playersPerPage} totalTeams={players.length} Paginate={paginate} currentPage={currentPage}/>}
        </main>
    );
};

export default AppPlayers;