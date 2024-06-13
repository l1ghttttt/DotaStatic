import {useEffect, useRef} from 'react';
import * as React from "react";
import './app-news.css'
import AppBurger from "../AppBurger/AppBurger";

const AppNews = () => {
    const contRef = useRef(null);
    const newsRef = useRef(null);
    const textRef = useRef(null);

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
            threshold: 0.1
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (contRef.current) {
                    contRef.current.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
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

    useEffect(() => {
        if (!textRef ||!textRef.current) return

        const ObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const Observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (newsRef.current) {
                    newsRef.current.style.transform = "translateY(0px)";
                    newsRef.current.style.opacity = "1";
                }
            }
        }, ObserverOptions);
        if (textRef.current) {
            Observer.observe(textRef.current);
        }

        return () => {
            Observer.disconnect()
        }
    }, []);

    return (
        <main className="main">
            <AppBurger/>
            <div className={'main__text'} ref={textRef}>
                <h2 className="main__name" ref={newsRef}>Лента новостей</h2>
            </div>
            <div className="container" ref={contRef}>
                <div className="a black"><p>Патч 7.32b</p></div>
                <div className="b"><p>Обновление 7.33</p></div>
                <div className="c"><p className="new_hero">Новый герой</p><p className="muerta">Muerta</p></div>
                <div className="d"><p>Новый ивент в честь годовщины</p></div>
                <div className="e"><p>Новости по Dota 2</p></div>
                <div className="f"><p></p></div>
            </div>
        </main>
    );
};

export default AppNews;