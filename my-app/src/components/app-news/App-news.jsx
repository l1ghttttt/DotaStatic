import React, {useEffect, useRef} from 'react';
import './app-news.css'

const AppNews = () => {

    const contRef = useRef(null);

    useEffect(() => {
        if (contRef.current!== null) {
            contRef.current.style.height = `${window.innerHeight}px`;
        }
    }, []);
    return (
        <main className="main">
            <h2 className="main__name">Лента новостей</h2>
            <div className="container" ref={contRef}>
                <div className="a black"><p>Патч 7.32b</p></div>
                <div className="b"><p>Обновление 7.33</p></div>
                <div className="c"><p className="new_hero">Новый герой</p><p className = "muerta">Muerta</p></div>
                <div className="d"><p>Новый ивент в честь годовщины</p></div>
                <div className="e"><p>Новости по Dota 2</p></div>
                <div className="f"><p></p></div>
            </div>
        </main>
    );
};

export default AppNews;