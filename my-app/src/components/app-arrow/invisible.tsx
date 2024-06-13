import {useEffect, useRef} from 'react';
import * as React from "react";
import { TweenMax } from 'gsap';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";
import './invisible.css'

const DisappearingElement = () => {
    const dispatch = useDispatch();
    const elementRef = useRef(null);
    const display = useAppSelector((state) => state.Arrow);
    const opacity = useAppSelector((state) => state.opacity);
    //let observer = new IntersectionObserver()

    useEffect(() => {
        const disappearingElement = elementRef.current;
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        function updateOpacity() {
            const scrollPercentage = window.scrollY / totalScrollHeight;
            if (scrollPercentage >= 1) {
                TweenMax.to(disappearingElement, 0, { opacity: 0, onComplete: () => dispatch({type: `OPAFALSE`}) });
            }
        }

        function handleScroll() {
            const lastScrollY = window.scrollY;
            setTimeout(() => {
                if (lastScrollY!== window.scrollY) {
                    updateOpacity();
                }
            }, 100); // Задержка для устранения ложных срабатываний пр
            // и быстрой прокрутке
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    if (!display) {
        return null;
    }

    return (
        <div ref={elementRef} className={`arrow`} style={{opacity: opacity? 1 : 0}}>
            <img src="/ArrowDown.svg" alt="" width={300}/>
        </div>
    );
};

export default DisappearingElement;