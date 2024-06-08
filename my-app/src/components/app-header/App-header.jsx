import React, {useRef, useEffect} from 'react';
import './app-header.css';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import DisappearingElement from "../invisible";

const AppHeader = () => {
    const display = useSelector((state) => state.display);
    const slide = useSelector((state) => state.slide);
    const dispatch = useDispatch();
    const nodeRef1 = useRef(null);
    const nodeRef2 = useRef(null);
    const nodeRef3 = useRef(null);
    const nodeRef4 = useRef(null);
    const nodeRef5 = useRef(null);
    const nodeRef6 = useRef(null);
    const nodeRef7 = useRef(null);
    const nodeRef8 = useRef(null);
    const nodeRef9 = useRef(null);
    const nodeRef10 = useRef(null);
    const nodeRef11 = useRef(null);
    const nodeRef12 = useRef(null);

    useEffect(() => {
        if (nodeRef1.current !== null) {
            switch (slide) {
                case `1`:
                    switchPos(0, 0, 0);
                    break;
                case `2`:
                    switchPos(200, 85, 450);
                    break;
                case `3`:
                    switchPos(400, 165, 900);
                    break;
                case `4`:
                    switchPos(600, 235, 1350);
                    break;
                default:
                    break;
            }
        }
    }, );
    if (!display) {
        return (``)
    }
    const ToStats = () => {
        window.location.href = `/stats`;
    };

    const switchPos = (x, y, z) => {
        nodeRef1.current.style.transform = `translateY(-${y}px)`;
        nodeRef2.current.style.transform = `translateY(-${y}px)`;
        nodeRef3.current.style.transform = `translateY(-${y}px)`;
        nodeRef4.current.style.transform = `translateY(-${y}px)`;
        nodeRef5.current.style.transform = `translateY(-${x}px)`;
        nodeRef6.current.style.transform = `translateY(-${x}px)`;
        nodeRef7.current.style.transform = `translateY(-${x}px)`;
        nodeRef8.current.style.transform = `translateY(-${x}px)`;
        nodeRef9.current.style.transform = `translateX(-${z}px)`;
        nodeRef10.current.style.transform = `translateX(-${z}px)`;
        nodeRef11.current.style.transform = `translateX(-${z}px)`;
        nodeRef12.current.style.transform = `translateX(-${z}px)`;
    }


    const setOPA = () => {
        dispatch({type: 'OPAFALSE'});
    }
    return (
        <>
            <header className="header">
                <div className="header__inner">
                    <NavLink to={'/'}>
                        <img src="/DotaIcon.png"
                             alt="DotaStats"
                             className="header__logo"
                             height={80}
                             loading="lazy"
                             onClick={() => {
                                 switchPos(0, 0, 0)
                                 setOPA()
                             }}
                        />
                    </NavLink>
                    <nav className="header__menu">
                        <ul className={`header__menu-list`}>
                            <li className={`header__menu-item`}><p className="header__menu-link"
                                                                   onClick={() => switchPos(200, 85, 450)}><NavLink
                                className={({isActive}) => isActive ? "active" : ''} to={'/heroes'}>Герои</NavLink></p>
                            </li>
                            <li className={`header__menu-item`}><p className="header__menu-link"
                                                                   onClick={() => switchPos(400, 165, 900)}><NavLink
                                to={'/teams'}>Команды</NavLink></p></li>
                            <li className={`header__menu-item`}><p className="header__menu-link"
                                                                   onClick={() => switchPos(600, 235, 1350)}><NavLink
                                to={'/players'}>Игроки</NavLink></p></li>
                        </ul>
                    </nav>
                    <button className="header__button" type="button" onClick={() => ToStats()}>
                        Моя статистика
                    </button>
                </div>
            </header>

            <div className="wrapper">
                <div className="wrapper__text">
                    <h2 className="wrapper__text__name">
                        <h2 ref={nodeRef1}>DotaStatic</h2>
                        <h2 ref={nodeRef2}>Герои</h2>
                        <h2 ref={nodeRef3}>Команды</h2>
                        <h2 ref={nodeRef4}>Игроки</h2>
                    </h2>
                    <h3 className="wrapper__text__description">
                        <h3 ref={nodeRef5}>Лучший сайт для просмотра как своей, так и глобальной статистики игры Dota
                            2</h3>
                        <h3 ref={nodeRef6}>Все персонажи, можете получить дополнительную информацию, кликнув по ним</h3>
                        <h3 ref={nodeRef7}>Известные киберспортивные коллективы</h3>
                        <h3 ref={nodeRef8}>Профили игроков про-сцены</h3>
                    </h3>
                </div>
                <div className="wrapper__image">
                    <img ref={nodeRef9} src="/staticImg.png" alt=""/>
                    <img ref={nodeRef10} src="/heroesImg.png" alt=""/>
                    <img ref={nodeRef11} src="/TeamsImg.png" alt=""/>
                    <img ref={nodeRef12} src="/playersImg.png" alt=""/>
                </div>
            </div>
            <DisappearingElement/>
        </>
    );
};

export default AppHeader;