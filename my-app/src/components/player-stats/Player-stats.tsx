import * as React from "react";
import './player-stats.css';
import axios from "axios";
import {NavLink, useNavigate, useParams} from "react-router-dom";

interface Player {
    [key: string]: any; // Это позволяет любым свойствам быть допустимыми
}
interface Statistic {
    [key: string]: any; // Это позволяет любым свойствам быть допустимыми
}

const PlayerStats: React.FC = () => {
    const {playerId} = useParams();
    const id = playerId
    const [player, setPlayer] = React.useState<Player | undefined>(undefined);
    const [loading, setLoading] = React.useState(true);
    let statistic:Statistic = {}
    const navigate = useNavigate();

    React.useEffect(() => {
        const getPlayer = async () => {
            setLoading(true);
            try {
                const [profileRes, wlRes, matchesRes, peersRes, totalsRes] = await Promise.all([
                    axios.get(`https://api.opendota.com/api/players/${id}`),
                    axios.get(`https://api.opendota.com/api/players/${id}/wl`),
                    axios.get(`https://api.opendota.com/api/players/${id}/recentMatches`),
                    axios.get(`https://api.opendota.com/api/players/${id}/peers`),
                    axios.get(`https://api.opendota.com/api/players/${id}/totals`)
                ]);
                const combinedData = {
                    ...profileRes.data,
                    ...wlRes.data,
                    totals: totalsRes.data,
                    ...matchesRes.data,
                    peers: peersRes.data,
                };
                setPlayer(combinedData);
            } catch (error) {
                console.error("Ошибка при получении игрока", error);
            } finally {
                setLoading(false);
            }
        };
        getPlayer();
    }, [id]);

    if (!loading) {
        if (!player[1]) {
            return (
                <div>
                    <h1 style={{color: `red`, fontSize: `50px`}}>Не найден</h1>
                    <button className="playerStats__button" type="button" onClick={() => {navigate(-1)}}>⬅ Назад</button>
                </div>
            )
        }
    }

    if (loading) {

        return (
            <div className="loading-cont">
                <span className="loader-3"></span>
            </div>
        );
    }

    if (player?.totals) {
        if (player) {
            let dataArray = player.totals; // Используйте напрямую без?.totals, так как мы уже проверили наличие player
            statistic = dataArray.reduce((accumulator, currentObject) => {
                accumulator[currentObject.field] = currentObject;
                return accumulator;
            }, {});
        } else {
            console.log('Player is undefined');
        }
    }

    const plusColor = player?.profile?.plus ? `green` : `red`
    let wr = parseFloat((player?.win / (player?.win + player?.lose) * 100).toFixed(2))
    let wrColor
    if (wr > 50) {
        wrColor = `green`
    } else if (wr === 50) {
        wrColor = `gray`
    } else if (wr < 50) {
        wrColor = `red`
    }

    let leaderrang
    if (player?.leaderboard_rank) {
        leaderrang = player?.leaderboard_rank
    }
    let titan = null
    if (leaderrang === 1) {
        titan = `80-1`
    } else if (leaderrang <= 10) {
        titan = `80-10`
    } else if (leaderrang <= 100) {
        titan = `80-100`
    } else if (leaderrang <= 1000) {
        titan = `80-1000`
    } else {
        titan = null
    }

    console.log(player)

    return (
        <main className="playerStats">
            <button className="playerStats__button" type="button" onClick={() => {
                navigate(-1)
            }}>
                ⬅ Назад
            </button>
            <button className="playerStats__button-home" type="button" onClick={() => {
                navigate('/')
            }}>
                ⬅ На главную
            </button>
            <div className="playerStats__name">
                <img
                    src={titan ? (`/` + titan + `.png`) : (`/` + player?.rank_tier + `.png`)}
                    alt="ранг игрока"
                    className={`playerStats__name-rang`}
                    width={300}
                    height={300}
                    loading={`lazy`}
                />
                <h1 className="playerStats__name-text">{player?.profile?.personaname}</h1>
                <p className="playerStats__name-url">[<a target={`_blank`} href={player.profile?.profileurl}>steam</a>]
                </p>
            </div>


            <section className={`playerStats__main`}>
                <div className="playerStats__main-div">
                    <img className={`playerStats__main-avatar`} src={player.profile?.avatarfull} alt=""/>
                </div>
                <div className={`playerStats__main__mainStats`}>
                    <div>
                        <div className={`playerStats__main__mainStats__games`}>
                            <p style={{color: wrColor, textShadow: `4px 4px 15px ${wrColor}`}}
                               className={`playerStats__main__mainStats__games-wr`}>{parseFloat((player?.win / (player?.win + player?.lose) * 100).toFixed(2))}%</p>
                            <p className={`playerStats__main__mainStats__games-total`}>{player?.win + player?.lose}</p>
                            <h4><span style={{color: `green`, textShadow: `2px 2px 10px green`}}>{player?.win}</span>
                            </h4>
                            <div className={`bar`}></div>
                            <h4><span style={{color: `red`, textShadow: `2px 2px 10px red`}}>{player?.lose}</span></h4>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <h4>{player?.leaderboard_rank ?
                            <span style={{color: `green`}}>В топе: {player?.leaderboard_rank} место</span> :
                            <span style={{color: `red`}}>Не в топе</span>}</h4>
                        <h4>Dota plus: <span style={{color: plusColor}}>{player?.profile?.plus ? `Да` : `Нет`}</span>
                        </h4>
                    </div>
                </div>
            </section>
            <h3 className="playerStats-otherName">Other statistic</h3>
            <section className={`playerStats__offer`}>
                <h4>Убито курьеров: {statistic?.courier_kills.sum}</h4>
                <h4>Смертей: {statistic?.deaths.sum}</h4>
                <h4>Помощей: {statistic?.assists.sum}</h4>
                <h4>Добито: {statistic?.last_hits.sum}</h4>
                <h4>Не отдано: {statistic?.denies.sum}</h4>
                <h4>Средняя эффективность лайннга: {statistic?.lane_efficiency_pct.n}%</h4>
                <h4>Поднято уровней: {statistic?.level.sum}</h4>
                <h4>Урона по героям: {statistic?.hero_damage.sum}</h4>
                <h4>Урона по башням: {statistic?.tower_damage.sum}</h4>
                <h4>Восстановлено здоровья: {statistic?.hero_healing.sum}</h4>
                <h4>Застанено: {statistic?.stuns.sum} секунд</h4>
                <h4>Сломано башен: {statistic?.tower_kills.sum}</h4>
                <h4>Убито лесных крипов: {statistic?.neutral_kills.sum}</h4>
                <h4>Убито курьеров: {statistic?.courier_kills.sum}</h4>
                <h4>Куплено свитков телепортации: {statistic?.purchase_tpscroll.sum}</h4>
                <h4>Куплено обсерверов: {statistic?.purchase_ward_observer.sum}</h4>
                <h4>куплено сентрей: {statistic?.purchase_ward_sentry.sum}</h4>
                <h4>куплено гемов: {statistic?.purchase_gem.sum}</h4>
                <h4>куплено рапир: {statistic?.purchase_rapier.sum}</h4>
                <h4>Поставлено меток: {statistic?.pings.sum}</h4>
            </section>
            <h3 className="playerStats-otherName">Друзья</h3>
            <div className="playerStats__friends">
                {player?.peers?.map((player, i) => {
                    const wr = parseFloat((Number(player?.win) / Number(player?.with_games) * 100).toFixed(2))
                    let wrColor
                    if (wr > 50) {
                        wrColor = `green`
                    } else if (wr === 50) {
                        wrColor = `gray`
                    } else if (wr < 50) {
                        wrColor = `red`
                    }
                    return (<div key={i} className="playerStats__friends__friend">
                            <img src={player?.avatarfull} alt="" className="playerStats__friends__friend-ava"/>
                            <h4 className="playerStats__friends__friend-name"><NavLink
                                to={`/players/${player?.account_id}`}> {player?.personaname} </NavLink></h4>
                            <h4 className="playerStats__friends__friend-info">Игр вместе: {player?.with_games}</h4>
                            <h4 className="playerStats__friends__friend-info">Побед вместе: {player?.win}</h4>
                            <h4 className="playerStats__friends__friend-info">Общий WR: <span
                                style={{color: wrColor}}>{parseFloat((Number(player?.win) / Number(player?.with_games) * 100).toFixed(2))}%</span>
                            </h4>
                        </div>
                    )
                })}
            </div>
        </main>
    );
}

export default PlayerStats;
