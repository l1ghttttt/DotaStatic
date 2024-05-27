import React, {useEffect, useRef} from 'react';
import './app-heroes.css'

interface AppHeroesProps {}

const AppHeroes: React.FC<AppHeroesProps> = () => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        let isPlaying = false;

        function handlePlay() {
            if (!isPlaying && video) {
                video.play().catch(error => console.error("Error playing video:", error));
                isPlaying = true;
            }
        }

        function handlePause() {
            if (isPlaying && video) {
                video.pause();
                video.currentTime = 0;
                isPlaying = false;
            }
        }

        // Добавляем обработчики событий
        video?.addEventListener('mouseover', handlePlay);
        video?.addEventListener('mouseout', handlePause);

        // Очищаем обработчики при размонтировании компонента
        return () => {
            video?.removeEventListener('mouseover', handlePlay);
            video?.removeEventListener('mouseout', handlePause);
        };
    }, []);


    return (
        <div className="app-heroes">
            <div className="app-heroes__div">
                <div className="app-heroes__container app-heroes__str">
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                </div>
                <img src="/strength.png" alt=""/>
            </div>
            <div className="app-heroes__div">
                <img src="/agi.png" alt=""/>
                <div className="app-heroes__container app-heroes__agi">

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                </div>
            </div>
            <div className="app-heroes__div">
                <div className="app-heroes__container app-heroes__int">

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                </div>
                <img src="/int.png" alt=""/>  
            </div>
            <div className="app-heroes__div">
                <img src="/all.png" alt=""/>
                <div className="app-heroes__container app-heroes__all">
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>

                    <div className="app-heroes__container__hero">
                        <video ref={videoRef} loop muted playsInline>
                            <source src="/npc_dota_hero_abaddon%20—%20копия.webm" type="video/webm"/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHeroes;