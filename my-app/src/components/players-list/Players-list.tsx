import * as React from "react";
import './players-list.css'
import {NavLink} from "react-router-dom";

interface PlayersListProps {
    players: Array<any>;
    loading: boolean;
}

const PlayersList: React.FC<PlayersListProps> = ({players, loading}) => {

    if (loading) {
        return (
            <h2 style={{color: 'white'}}>loading</h2>
        )
    }
    return (
        <ul className="players__list">
            {players.map((player, i) => {
                let role = ``
                switch (player.fantasy_role) {
                    case 1:
                        role = `Carry`
                        break
                    case 2:
                        role = `Mid`
                        break
                    case 3:
                        role = `Hard`
                        break
                    case 4:
                        role = `Support`
                        break
                    case 5:
                        role = `Full-Support`
                        break
                    default:
                        role = `No-Role`
                        break
                }
                return(
                    <li key={i} className="players__list__card">
                        <img src={player.avatarfull} alt="" className={`players__list__card-avatar`}/>
                        <div className={`players__list__card-description`}>
                            <h4><NavLink to={`/players/${player.account_id}`} className={`players__list__card-description__name`}>{player.personaname}</NavLink></h4>
                            <div className={`players__list__card-description__other`}>
                                <p className={`players__list__card-description__other-pos`}>Position: {role}</p>
                                <p className={`players__list__card-description__other-country`}>Country: {player.loccountrycode}</p>
                                <p className={`players__list__card-description__other-plus`}>Dota plus: {player.plus ? "Yes" : "No"}</p>
                                <p className={`players__list__card-description__other-team`}>team:{player.team_name}</p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default PlayersList;