import {useEffect, useRef} from 'react';
import * as React from "react";
import './app-news.css'

const AppNews = () => {

    const contRef = useRef(null);

    useEffect(() => {
        if (contRef.current!== null) {
            contRef.current.style.height = `${window.innerHeight}px`;
        }
    }, []);
    useEffect(() => {
        if (!contRef ||!contRef.current) return

        const observerOptions = {
            root: null, // Использует viewport
            rootMargin: '0px',
            threshold: 0.2 // Срабатывает, когда 50% элемента видны
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (contRef.current) {
                    contRef.current.style.transform = "translateX(0px)";
                    contRef.current.style.opacity = "1";
                }
            }
        }, observerOptions);
        if (contRef.current) {
            observer.observe(contRef.current);
        }

        return () => {
            observer.disconnect()
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