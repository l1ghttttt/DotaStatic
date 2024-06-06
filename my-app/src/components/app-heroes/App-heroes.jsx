import React, {useEffect, useState} from 'react';
import './app-heroes.css'
import axios from "axios";
import {NavLink} from "react-router-dom";

const AppHeroes = () => {

    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getHeroes = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://api.opendota.com/api/heroStats');
                const sortedHeroes = res.data.sort((a, b) => a.localized_name.localeCompare(b.localized_name));
                setHeroes(sortedHeroes);
            } catch (error) {
                console.error("Ошибка при получении команд:", error);
            } finally {
                setLoading(false);
            }
        };
        getHeroes();
    }, []);

    console.log(heroes)


    if (loading) {
        return <p style={{color: `red`}}>Loading...</p>;
    }

    return (
        <div className="app-heroes">

            <div className="app-heroes__div">
                <div className="app-heroes__container app-heroes__str">
                    {heroes.map((hero, i) => {
                        const cleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                        if (hero?.primary_attr === `str`)

                            return(
                                <div key={i} className={`app-heroes__div-cont`}>
                                    <NavLink to={`/heroes/${hero?.id}`}>
                                        <div className="app-heroes__container__hero">
                                            <img src= {`/icons/${cleanedName}.png`} alt="" height={110} />
                                        </div>
                                        <h4 className={`app-heroes__container__hero-name`}>{hero?.localized_name}</h4>
                                    </NavLink>
                                </div>
                            )
                    })}
                </div>

                <img src="/strength.png" alt=""/>
            </div>

            <div className="app-heroes__div">
                <img src="/agi.png" alt=""/>
                <div className="app-heroes__container app-heroes__agi">
                    {heroes.map((hero, i) => {
                        const cleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                        if (hero?.primary_attr === `agi`)
                            return(
                                <div key={i} className={`app-heroes__div-cont`}>
                                    <NavLink to={`/heroes/${hero?.id - 1}`}>
                                        <div className="app-heroes__container__hero">
                                            <img src={`/icons/${cleanedName}.png`} alt="" height={110}/>
                                        </div>
                                        <h4 className={`app-heroes__container__hero-name`}>{hero?.localized_name}</h4>
                                    </NavLink>
                                </div>
                            )
                    })
                    }
                </div>
            </div>

            <div className="app-heroes__div">
                <div className="app-heroes__container app-heroes__int">
                    {heroes.map((hero, i) => {
                        const cleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                        if (hero?.primary_attr === `int`)
                            return(
                                <div key={i} className={`app-heroes__div-cont`}>
                                    <NavLink to={`/heroes/${hero?.id - 1}`}>
                                        <div className="app-heroes__container__hero">
                                            <img src={`/icons/${cleanedName}.png`} alt="" height={110}/>
                                        </div>
                                        <h4 className={`app-heroes__container__hero-name`}>{hero?.localized_name}</h4>
                                    </NavLink>
                                </div>
                            )
                    })
                    }
                </div>
                <img src="/int.png" alt=""/>
            </div>

            <div className="app-heroes__div">
                <img src="/all.png" alt=""/>
                <div className="app-heroes__container app-heroes__all">
                    {heroes.map((hero, i) => {
                        const cleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                        if (hero?.primary_attr === `all`)
                            return(
                                <div key={i} className={`app-heroes__div-cont`}>
                                    <NavLink to={`/heroes/${hero?.id - 1}`} className={`app-heroes__container__hero-name-link`}>
                                        <div className="app-heroes__container__hero">
                                            <img src={`/icons/${cleanedName}.png`} alt="" height={110}/>
                                        </div>
                                        <h4 className={`app-heroes__container__hero-name`}>{hero?.localized_name}</h4>
                                    </NavLink>
                                </div>
                            )
                    })
                    }
                </div>
            </div>

        </div>
    );
};

export default AppHeroes;
