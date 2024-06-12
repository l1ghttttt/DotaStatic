import {useEffect, useRef, useState} from 'react';
import * as React from "react";
import './app-heroes.css'
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";

const AppHeroes = () => {
    const dispatch = useAppDispatch()
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);
    const strRef = useRef(null)
    const agiRef = useRef(null);
    const intRef = useRef(null);
    const allRef = useRef(null);
    const heroRef = useRef(null);
    const textRef = useRef(null);

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

    useEffect(() => {
        if (!strRef ||!strRef.current) return

        const ObserverOptions = {
            root: null, // Использует viewport
            rootMargin: '0px',
            threshold: 0.2 // Срабатывает, когда 50% элемента видны
        };

        const FirstObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (strRef.current) {
                    strRef.current.style.transform = "translateX(0px)";
                    strRef.current.style.opacity = "1";
                    agiRef.current.style.transform = "translateX(0px)";
                    agiRef.current.style.opacity = "1";
                }
            }
        }, ObserverOptions);
        if (strRef.current) {
            FirstObserver.observe(strRef.current);
        }

        const SecondObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (intRef.current) {
                    intRef.current.style.transform = "translateX(0px)";
                    intRef.current.style.opacity = "1";
                    allRef.current.style.transform = "translateX(0px)";
                    allRef.current.style.opacity = "1";
                }
            }
        }, ObserverOptions);
        if (intRef.current) {
            SecondObserver.observe(intRef.current);
        }

        return () => {
            FirstObserver.disconnect()
            FirstObserver.disconnect()
        }
    }, [loading]);


    useEffect(() => {
        if (!textRef ||!textRef.current) return

        const ObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const Observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (heroRef.current) {
                    heroRef.current.style.transform = "translateY(0px)";
                    heroRef.current.style.opacity = "1";
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

    if (loading) {
        dispatch({type: `ARRFALSE`});
        return <span style={{position: `absolute`, top: `calc(100% - 100px)`}} className="loader"></span>;
    }
    if (!loading) {
        dispatch({type: `ARRTRUE`});
        dispatch({type: `OPATRUE`});
    }

    return (
        <main>
            <div className={'app-heroes__text'} ref={textRef}>
                <h3 className={"teams__name"} ref={heroRef}>Heroes</h3>
            </div>
            <div className="app-heroes">
                <div className="app-heroes__div">
                    <div className="app-heroes__container app-heroes__str" ref={strRef}>
                        {heroes.map((hero, i) => {
                            const UpcleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                            const cleanedName = UpcleanedName.toLowerCase()
                            if (hero?.primary_attr === `str`)

                                return (
                                    <div key={i} className={`app-heroes__div-cont`}>
                                        <NavLink to={`/heroes/${hero?.id}`}>
                                            <div className="app-heroes__container__hero">
                                                <img src={`/icons/${cleanedName}.png`} alt=""
                                                     className={`app-heroes__container__hero-image`}/>
                                            </div>
                                            <h4 className={`app-heroes__container__hero-name`}>{hero?.localized_name}</h4>
                                        </NavLink>
                                    </div>
                                )
                        })}
                    </div>
                </div>

                <div className="app-heroes__div">
                    <div className="app-heroes__container app-heroes__agi" ref={agiRef}>
                        {heroes.map((hero, i) => {
                            const UpcleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                            const cleanedName = UpcleanedName.toLowerCase()
                            if (hero?.primary_attr === `agi`)
                                return (
                                    <div key={i} className={`app-heroes__div-cont`}>
                                        <NavLink to={`/heroes/${hero?.id}`}>
                                            <div className="app-heroes__container__hero">
                                                <img src={`/icons/${cleanedName}.png`} alt=""
                                                     className={`app-heroes__container__hero-image`}/>
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
                    <div className="app-heroes__container app-heroes__int" ref={intRef}>
                        {heroes.map((hero, i) => {
                            const UpcleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                            const cleanedName = UpcleanedName.toLowerCase()
                            if (hero?.primary_attr === `int`)
                                return (
                                    <div key={i} className={`app-heroes__div-cont`}>
                                        <NavLink to={`/heroes/${hero?.id}`}>
                                            <div className="app-heroes__container__hero">
                                                <img src={`/icons/${cleanedName}.png`} alt=""
                                                     className={`app-heroes__container__hero-image`}/>
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
                    <div className="app-heroes__container app-heroes__all" ref={allRef}>
                        {heroes.map((hero, i) => {
                            const UpcleanedName = hero.localized_name.replace(/[_\s-]/g, '')
                            const cleanedName = UpcleanedName.toLowerCase()
                            if (hero?.primary_attr === `all`)
                                return (
                                    <div key={i} className={`app-heroes__div-cont`}>
                                        <NavLink to={`/heroes/${hero?.id}`}
                                                 className={`app-heroes__container__hero-name-link`}>
                                            <div className="app-heroes__container__hero">
                                                <img src={`/icons/${cleanedName}.png`} alt=""
                                                     className={`app-heroes__container__hero-image`}/>
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
        </main>
    );
};

export default AppHeroes;
