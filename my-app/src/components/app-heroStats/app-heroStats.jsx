import React, {useEffect, useRef, useState} from 'react';
import './app-heroStats.css';
import axios from "axios";
import ProgressBar from "../progress-bar/progress-bar";

const AppHeroStats = () => {
    const [hero,setHero] = useState([]);
    const [loading, setLoading] = useState(true);
    const id = 12
    let borderStr = 0
    let borderAgi = 0
    let borderInt = 0
    let damageBonus = 0
    let typeAttack

    useEffect(() => {
        const getHero = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://api.opendota.com/api/heroStats');
                setHero(res.data);
            } catch (error) {
                console.error("Ошибка при получении команд:", error);
            } finally {
                setLoading(false);
            }
        };
        getHero();
    }, []);

    if (loading) {
        return <p style={{color: `red`}}>Loading...</p>;
    }

    switch (hero[id - 1].primary_attr) {
        case `str`:
            borderStr = 2
            damageBonus = hero[id - 1].base_str
            break
        case `agi`:
            borderAgi = 2
            damageBonus = hero[id - 1].base_agi
            break
        case `int`:
            borderInt = 2
            damageBonus = hero[id - 1].base_int
            break
        case `all`:
            borderStr = 2
            borderAgi = 2
            borderInt = 2
            damageBonus = (hero[id - 1].base_str + hero[id - 1].base_agi + hero[id - 1].base_int) * 0.6
            break
    }
    if (hero[id - 1].attack_type === `Melee`) {
        typeAttack = `Ближний`
    } else {
        typeAttack = `Дальний`
    }

    return (
        <main className="herostats">
            <button className="herostats__button" type="button">
                ⬅ Назад
            </button>0,
            <h1 className="herostats__name">{hero[id - 1].localized_name}</h1>

            <section className={`herostats__main`}>
                <div>
                    <video loop muted playsInline autoPlay={true} className={`herostats__main-avatar`}>
                        <source src={`/heroes/${hero[id - 1].localized_name}.webm`} type="video/webm"/>
                    </video>
                </div>
                <div className={`herostats__main__info`}>
                    <h4 className={`herostats__main__info-matches`}>Игры: <span
                        className={`statistic`}>{hero[id - 1].pub_pick}</span></h4>
                    <h4 className={`herostats__main__info-wins`}>Победы: <span
                        className={`statistic`}>{hero[id - 1].pub_win}</span></h4>

                    <div className={`herostats__main__info__diagram`}>
                        <div className={`herostats__main__info__diagram-graph`}>
                            <ProgressBar valueNow={Number(hero[id - 1].pub_win)} minValue={0}
                                         maxValue={Number(hero[id - 1].pub_pick)}/>
                        </div>
                        <h4 className={`herostats__main__info-WR`}>WR: <span
                            className={`statistic`}>{parseFloat((hero[id - 1].pub_win / hero[id - 1].pub_pick * 100).toFixed(2))}%</span>
                        </h4>
                    </div>

                    <h4 className={`herostats__main__info-roles`}>Роли : {hero[id - 1].roles.map((role, i) => {
                        let g = hero[id - 1].roles.length - 1
                        if (role === hero[id - 1].roles[g]) {
                            return (
                                <p className={`statistic herostats__main__info-roles-role`} key={i}>{role}</p>
                            )
                        } else {
                            return (
                                <p className={`statistic herostats__main__info-roles-role`} key={i}>{role},</p>
                            )
                        }
                    })}</h4>
                </div>
            </section>

            <section className={`herostats__attributes`}>
                <div className={`herostats__attributes-str`} style={{
                    borderTop: `${borderStr}px solid red`,
                    borderBottom: `${borderStr}px solid red`
                }}>
                    <img src="/strength.png" alt="" width={100} height={100}/>
                    <p>{hero[id - 1].base_str + "  " + " +" + hero[id - 1].str_gain}</p>
                </div>
                <div className={`herostats__attributes-agi`} style={{
                    borderTop: `${borderAgi}px solid #00fa00`,
                    borderBottom: `${borderAgi}px solid #00fa00`
                }}>
                    <img src="/agi.png" alt="" width={100} height={100}/>
                    <p>{hero[id - 1].base_agi + "  " + " +" + hero[id - 1].agi_gain}</p>
                </div>
                <div className={`herostats__attributes-int`} style={{
                    borderTop: `${borderInt}px solid #00a2db`,
                    borderBottom: `${borderInt}px solid #00a2db`
                }}>
                    <img src="/int.png" alt="" width={100} height={100}/>
                    <p>{hero[id - 1].base_int + "  " + " +" + hero[id - 1].int_gain}</p>
                </div>
            </section>

            <section className={`herostats__stats`}>
                <h3 className={`herostats__stats-name`}>Начальные показатели</h3>
                <p className={`herostats__stats-value`}>тип боя: {typeAttack}</p>
                <p className={`herostats__stats-value`}>урон : {(hero[id - 1].base_attack_min + damageBonus)} - {(hero[id - 1].base_attack_max + damageBonus)}</p>
                <p className={`herostats__stats-value`}>дальность атаки: {hero[id - 1].attack_range}</p>
                <p className={`herostats__stats-value`}>интервал атак: {hero[id - 1].attack_rate}</p>
                <p className={`herostats__stats-value`}>скорость атаки : {hero[id - 1].base_attack_time + hero[id - 1].base_agi}</p>
                <p className={`herostats__stats-value`}>броня: {hero[id - 1].base_armor + hero[id - 1].base_agi * 0.16}</p>
                <p className={`herostats__stats-value`}>здоровье : {hero[id - 1].base_health + hero[id - 1].base_str * 19}</p>
                <p className={`herostats__stats-value`}>регенирация здоровья : {hero[id - 1].base_health_regen + hero[id - 1].base_str * 0.03}</p>
                <p className={`herostats__stats-value`}>мана : {hero[id - 1].base_mana + hero[id - 1].base_int * 13}</p>
                <p className={`herostats__stats-value`}>восстановление маны : {hero[id - 1].base_mana_regen + hero[id - 1].base_int * 0.04}</p>
                <p className={`herostats__stats-value`}>скорость : {hero[id - 1].move_speed}</p>
                <p className={`herostats__stats-value`}>дневной/ночной обзор
                    : {hero[id - 1].day_vision}/{hero[id - 1].night_vision}</p>
            </section>
        </main>
    );
};

export default AppHeroStats;