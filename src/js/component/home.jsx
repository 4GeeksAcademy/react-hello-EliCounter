import React from "react";
import { stopTimer, resumeTimer, resetTimer, startCountdown, startCounting } from "../index.js";

// Create your first component
const Home = () => {
    return (
        <div className="text-center">
            <div className="mt-3">
                <button className="btn btn-success ms-2" onClick={startCounting}>Start</button>
                <button className="btn btn-primary ms-2" onClick={stopTimer}>Stop</button>
                <button className="btn btn-success ms-2" onClick={resumeTimer}>Resume</button>
                <button className="btn btn-warning ms-2" onClick={resetTimer}>Reset</button>
                <button className="btn btn-info ms-2" onClick={startCountdown}>Countdown from 10</button>
            </div>
        </div>
    );
};

export default Home;
