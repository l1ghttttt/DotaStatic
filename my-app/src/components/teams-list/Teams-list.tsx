import * as React from "react";
import './teams-list.css'
import ProgressBar from "../progress-bar/Progress-bar";

interface TeamsListProps {
    teams: Array<any>;
    loading: boolean;
}

const TeamsList: React.FC<TeamsListProps> = ({teams, loading}) => {

    if (loading) {
        return (
            <h2 style={{color: 'white'}}>loading</h2>
        )
    }
    return (
        <ul className="teams-list">
            {
                teams.map((team, i) => (
                    <li key={i} className="teams-list__card">
                        <h4>#{team.number}</h4>
                        <img src={team.logo_url} alt="" className={`teams-list__card__img`}/>
                        <div className={`teams-list__card__description`}>
                            <p className={`teams-list__card__description-name`}>{team.name}</p>
                            <p className={`teams-list__card__description-tag`}>tag: {team.tag}</p>
                            <p className={`teams-list__card__description-rating`}>Rating: {team.rating}</p>
                        </div>
                        <div className={`teams-list__card__rates`}>
                            <div className={`teams-list__card__rates-bar`}><ProgressBar
                                valueNow={Number(team.wins)} minValue={0}
                                maxValue={Number(team.wins) + Number(team.losses)}/></div>
                            <p className={`teams-list__card__rates-winrate`}>
                                <span className={`teams-list__card__rates-winrate__losses`}>{team.losses}</span>
                                /
                                <span className={`teams-list__card__rates-winrate__wins`}>{team.wins}</span>
                            </p>
                            <p className={`teams-list__card__rates-winrate-WR`}>WR: {Math.floor((team.wins) / (team.losses + team.wins) * 100)}%</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default TeamsList;