import {useEffect, useState} from 'react';
import * as React from "react";
import './app-heroes.css'
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

const AppHeroes = () => {
    const dispatch = useDispatch();
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getHeroes = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://api.opendota.com/api/heroStats');
                const sortedHeroes = res.data.sort((a:any, b:any) => a.localized_name.localeCompare(b.localized_name));
                setHeroes(sortedHeroes);
            } catch (error) {
                console.error("Ошибка при получении команд:", error);
            } finally {
                setLoading(false);
            }
        };
        getHeroes();
    }, []);

    if (loading) {
        dispatch({type: `ARRFALSE`});
        return <span style={{position: `absolute`, top: `calc(100% - 200px)`}} className="loader"></span>;
    }
    if (!loading) {
        dispatch({type: `ARRTRUE`});
        dispatch({type: `OPATRUE`});
    }

    return (
        <div className="app-heroes">

            <div className="app-heroes__div">
                <div className="app-heroes__container app-heroes__str">
                    {heroes.map((hero, i) => {
                        const UpcleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                        const cleanedName = UpcleanedName.toLowerCase()
                        if (hero?.primary_attr === `str`)

                            return(
                                <div key={i} className={`app-heroes__div-cont`}>
                                    <NavLink to={`/heroes/${hero?.id}`}>
                                        <div className="app-heroes__container__hero">
                                            <img src= {`/icons/${cleanedName}.png`} alt="" className={`app-heroes__container__hero-image`}/>
                                        </div>
                                        <h4 className={`app-heroes__container__hero-name`}>{hero?.localized_name}</h4>
                                    </NavLink>
                                </div>
                            )
                    })}
                </div>
            </div>

            <div className="app-heroes__div">
                <div className="app-heroes__container app-heroes__agi">
                    {heroes.map((hero, i) => {
                        const UpcleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                        const cleanedName = UpcleanedName.toLowerCase()
                        if (hero?.primary_attr === `agi`)
                            return(
                                <div key={i} className={`app-heroes__div-cont`}>
                                    <NavLink to={`/heroes/${hero?.id}`}>
                                        <div className="app-heroes__container__hero">
                                            <img src={`/icons/${cleanedName}.png`} alt="" className={`app-heroes__container__hero-image`}/>
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
                        const UpcleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                        const cleanedName = UpcleanedName.toLowerCase()
                        if (hero?.primary_attr === `int`)
                            return(
                                <div key={i} className={`app-heroes__div-cont`}>
                                    <NavLink to={`/heroes/${hero?.id}`}>
                                        <div className="app-heroes__container__hero">
                                            <img src={`/icons/${cleanedName}.png`} alt="" className={`app-heroes__container__hero-image`}/>
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
                <div className="app-heroes__container app-heroes__all">
                    {heroes.map((hero, i) => {
                        const UpcleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                        const cleanedName = UpcleanedName.toLowerCase()
                        if (hero?.primary_attr === `all`)
                            return(
                                <div key={i} className={`app-heroes__div-cont`}>
                                    <NavLink to={`/heroes/${hero?.id}`} className={`app-heroes__container__hero-name-link`}>
                                        <div className="app-heroes__container__hero">
                                            <img src={`/icons/${cleanedName}.png`} alt="" className={`app-heroes__container__hero-image`}/>
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
