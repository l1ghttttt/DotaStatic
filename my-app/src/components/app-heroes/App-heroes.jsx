import React, {useEffect, useRef, useState} from 'react';
import './app-heroes.css'
import axios from "axios";

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

    if (loading) {
        return <p style={{color: `red`}}>Loading...</p>;
    }

    return (
        <div className="app-heroes">

            <div className="app-heroes__div">
                <div className="app-heroes__container app-heroes__str">
                    {heroes.map(hero => {
                        if (hero.primary_attr === `str`)
                        return(
                            <div>
                                <div className="app-heroes__container__hero">
                                    <video loop muted playsInline>
                                        <source src={`/heroes/${hero.localized_name}.webm`} type="video/webm"/>
                                    </video>
                                </div>
                                <h4 className={`app-heroes__container__hero-name`}>{hero.localized_name}</h4>
                            </div>
                        )
                    })
                    }
                </div>

                <img src="/strength.png" alt=""/>
            </div>

            <div className="app-heroes__div">
                <img src="/agi.png" alt=""/>
                <div className="app-heroes__container app-heroes__agi">
                    {heroes.map(hero => {
                        if (hero.primary_attr === `agi`)
                            return(
                                <div>
                                    <div className="app-heroes__container__hero">
                                        <video loop muted playsInline>
                                            <source src={`/heroes/${hero.localized_name}.webm`} type="video/webm"/>
                                        </video>
                                    </div>
                                    <h4 className={`app-heroes__container__hero-name`}>{hero.localized_name}</h4>
                                </div>
                            )
                    })
                    }
                </div>
            </div>

            <div className="app-heroes__div">
                <div className="app-heroes__container app-heroes__int">
                    {heroes.map(hero => {
                        if (hero.primary_attr === `int`)
                            return(
                                <div>
                                    <div className="app-heroes__container__hero">
                                        <video loop muted playsInline>
                                            <source src={`/heroes/${hero.localized_name}.webm`} type="video/webm"/>
                                        </video>
                                    </div>
                                    <h4 className={`app-heroes__container__hero-name`}>{hero.localized_name}</h4>
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
                    {heroes.map(hero => {
                        if (hero.primary_attr === `all`)
                            return(
                                <div>
                                    <div className="app-heroes__container__hero">
                                        <video loop muted playsInline>
                                            <source src={`/heroes/${hero.localized_name}.webm`} type="video/webm"/>
                                        </video>
                                    </div>
                                    <h4 className={`app-heroes__container__hero-name`}>{hero.localized_name}</h4>
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