import React, {useEffect, useRef} from 'react';
import './app-header.css';
import {NavLink} from "react-router-dom";

const AppHeader = () => {
    const heightRef = useRef(null);
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
        if (heightRef.current!== null) {
            heightRef.current.style.height = `${window.innerHeight}px`;
        }
    }, []);

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
                             onClick={() => switchPos(0, 0,0)}
                        />
                    </NavLink>
                    <nav className="header__menu">
                        <ul className={`header__menu-list`}>
                            <li className={`header__menu-item`}><a className="header__menu-link" onClick={() => switchPos(200, 75,450)}><NavLink to={'/heroes'}>Герои</NavLink></a></li>
                            <li className={`header__menu-item`}><a className="header__menu-link" onClick={() => switchPos(400, 150,900)}><NavLink to={'/teams'}>Команды</NavLink></a></li>
                            <li className={`header__menu-item`}><a className="header__menu-link" onClick={() => switchPos(600, 225,1350)}><NavLink to={'/players'}>Игроки</NavLink></a></li>
                        </ul>
                    </nav>
                    <button className="header__button" type="button">
                        Моя статистика
                    </button>
                </div>
            </header>

            <div className="wrapper" ref={heightRef}>
                <div className="wrapper__text">
                    <h2 className="wrapper__text__name">
                        <h2 ref={nodeRef1}>DotaStatic</h2>
                        <h2 ref={nodeRef2}>Герои</h2>
                        <h2 ref={nodeRef3}>Команды</h2>
                        <h2 ref={nodeRef4}>Игроки</h2>
                    </h2>
                    <h3 className="wrapper__text__description">
                        <h3 ref={nodeRef5}>Лучший сайт для просмотра как своей, так и глобальной статистики игры Dota 2</h3>
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
        </>
    );
};

export default AppHeader;