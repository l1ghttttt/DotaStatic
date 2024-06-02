import React, { useEffect, useRef } from 'react';
import './progress-bar.css';

const ProgressBar = ({ valueNow, minValue, maxValue }) => {
const progressBarRef = useRef(null);


    useEffect(() => {
        if (progressBarRef.current !== null) {
            const progressBar = progressBarRef.current;
            const percentage = ((valueNow - minValue) / (maxValue - minValue)) * 100;
            progressBar.style.setProperty('--value', `${percentage}`);
        }
    }, [valueNow, minValue, maxValue]);


    return (
        <div
            ref={progressBarRef}
            role="progressbar"
            aria-valuenow={valueNow}
            aria-valuemin={minValue}
            aria-valuemax={maxValue}
            className="progress-bar"
        >
        </div>
    );
};

export default ProgressBar;