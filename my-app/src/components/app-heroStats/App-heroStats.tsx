import {useEffect, useState} from 'react';
import * as React from "react";
import './app-heroStats.css';
import axios from "axios";
import ProgressBar from "../progress-bar/Progress-bar";
import {useNavigate, useParams} from "react-router-dom";

const AppHeroStats = () => {
    const [hero,setHero] = useState([]);
    const [loading, setLoading] = useState(true);
    const {heroId} = useParams();
    let borderStr = 0
    let borderAgi = 0
    let borderInt = 0
    let damageBonus = 0
    let typeAttack:string
    const navigate = useNavigate();
    const [selectedHero, setSelectedHero] = useState(null);

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

    const findHeroById = (id) => {
        const hero1 = hero.find(hero => hero.id == id);
        if (hero1) {
            setSelectedHero(hero1);
        } else {
            console.log(`Герой с ID ${id} не найден.`);
        }
    };


    useEffect(() => {
        findHeroById(heroId);
    }, [hero]);

    if (loading) {
        return <div className="loading-cont">
            <span className="loader-2"></span>
        </div>;
    }

    switch (selectedHero?.primary_attr) {
        case `str`:
            borderStr = 2
            damageBonus = selectedHero?.base_str
            break
        case `agi`:
            borderAgi = 2
            damageBonus = selectedHero?.base_agi
            break
        case `int`:
            borderInt = 2
            damageBonus = selectedHero?.base_int
            break
        case `all`:
            borderStr = 2
            borderAgi = 2
            borderInt = 2
            damageBonus = (selectedHero?.base_str + selectedHero?.base_agi + selectedHero?.base_int) * 0.6
            break
    }
    if (selectedHero?.attack_type === `Melee`) {
        typeAttack = `Ближний`
    } else {
        typeAttack = `Дальний`
    }

    return (
        <main className="herostats">
            <button className="herostats__button" type="button" onClick={() => {
                navigate(-1)
            }}>
                ⬅ Назад
            </button>
            <h1 className="herostats__name">{selectedHero?.localized_name}</h1>

            <section className={`herostats__main`}>
                <div>
                    <video loop muted playsInline autoPlay={true} className={`herostats__main-avatar`}>
                        <source src={`/heroes/${selectedHero?.localized_name}.webm`} type="video/webm"/>
                    </video>
                </div>
                <div className={`herostats__main__info`}>
                    <h4 className={`herostats__main__info-matches`}>Игры: <span
                        className={`statistic`}>{selectedHero?.pub_pick}</span></h4>
                    <h4 className={`herostats__main__info-wins`}>Победы: <span
                        className={`statistic`}>{selectedHero?.pub_win}</span></h4>

                    <div className={`herostats__main__info__diagram`}>
                        <div className={`herostats__main__info__diagram-graph`}>
                            <ProgressBar valueNow={Number(selectedHero?.pub_win)} minValue={0}
                                         maxValue={Number(selectedHero?.pub_pick)}/>
                        </div>
                        <h4 className={`herostats__main__info-WR`}>WR: <span
                            className={`statistic`}>{parseFloat((selectedHero?.pub_win / selectedHero?.pub_pick * 100).toFixed(2))}%</span>
                        </h4>
                    </div>

                    <h4 className={`herostats__main__info-roles`}>Роли : {selectedHero?.roles.map((role, i) => {
                        let g = selectedHero?.roles?.length - 1
                        if (role === selectedHero?.roles[g]) {
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
                    <p>{selectedHero?.base_str + "  " + " +" + selectedHero?.str_gain}</p>
                </div>
                <div className={`herostats__attributes-agi`} style={{
                    borderTop: `${borderAgi}px solid #00fa00`,
                    borderBottom: `${borderAgi}px solid #00fa00`
                }}>
                    <img src="/agi.png" alt="" width={100} height={100}/>
                    <p>{selectedHero?.base_agi + "  " + " +" + selectedHero?.agi_gain}</p>
                </div>
                <div className={`herostats__attributes-int`} style={{
                    borderTop: `${borderInt}px solid #00a2db`,
                    borderBottom: `${borderInt}px solid #00a2db`
                }}>
                    <img src="/int.png" alt="" width={100} height={100}/>
                    <p>{selectedHero?.base_int + "  " + " +" + selectedHero?.int_gain}</p>
                </div>
            </section>

            <section className={`herostats__stats`}>
                <h3 className={`herostats__stats-name`}>Начальные показатели</h3>
                <p className={`herostats__stats-value`}>тип боя: {typeAttack}</p>
                <p className={`herostats__stats-value`}>урон : {(selectedHero?.base_attack_min + damageBonus)} - {(selectedHero?.base_attack_max + damageBonus)}</p>
                <p className={`herostats__stats-value`}>дальность атаки: {selectedHero?.attack_range}</p>
                <p className={`herostats__stats-value`}>интервал атак: {selectedHero?.attack_rate}</p>
                <p className={`herostats__stats-value`}>скорость атаки : {selectedHero?.base_attack_time + selectedHero?.base_agi}</p>
                <p className={`herostats__stats-value`}>броня: {selectedHero?.base_armor + selectedHero?.base_agi * 0.16}</p>
                <p className={`herostats__stats-value`}>здоровье : {selectedHero?.base_health + selectedHero?.base_str * 19}</p>
                <p className={`herostats__stats-value`}>регенирация здоровья : {selectedHero?.base_health_regen + selectedHero?.base_str * 0.03}</p>
                <p className={`herostats__stats-value`}>мана : {selectedHero?.base_mana + selectedHero?.base_int * 13}</p>
                <p className={`herostats__stats-value`}>восстановление маны : {selectedHero?.base_mana_regen + selectedHero?.base_int * 0.04}</p>
                <p className={`herostats__stats-value`}>скорость : {selectedHero?.move_speed}</p>
                <p className={`herostats__stats-value`}>дневной/ночной обзор
                    : {selectedHero?.day_vision}/{selectedHero?.night_vision}</p>
            </section>
        </main>
    );
};

export default AppHeroStats;