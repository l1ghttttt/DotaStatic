
import * as React from "react";
import './progress-bar.css';

interface ProgressBarProps {
    valueNow: number;
    minValue: number;
    maxValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ valueNow, minValue, maxValue }) => {
const progressBarRef = React.useRef(null);


    React.useEffect(() => {
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