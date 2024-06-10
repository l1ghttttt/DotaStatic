import {useEffect, useRef} from 'react';
import * as React from "react";
import { TweenMax } from 'gsap';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";

const DisappearingElement = () => {
    const dispatch = useDispatch();
    const elementRef = useRef(null);
    const display = useAppSelector((state) => state.Arrow);
    const opacity = useAppSelector((state) => state.opacity);

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
        <div ref={elementRef} style={{ position: 'sticky', bottom: '100px', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', height: '1px', opacity: opacity? 1 : 0, marginBottom: '50px', transitionDuration: `.5s` }}>
            <img src="/ArrowDown.svg" alt="" width={300}/>
        </div>
    );
};

export default DisappearingElement;