// Import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


import "../styles/index.css";


import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

let seconds = 0; 
let isRunning = false; 
let countdownMode = false;
let intervalId = null;

const root = ReactDOM.createRoot(document.getElementById('app'));

// Function to render the application
const renderApp = () => {
    root.render(
        <div>
            <Home /> 
            <SecondsCounter timer={seconds} />
        </div>
    );
};

// Function to start the timer
const startTimer = () => {
    clearInterval(intervalId); // Clear any existing intervals
    intervalId = setInterval(() => {
        if (isRunning) {
            if (countdownMode) {
                // Countdown logic
                if (seconds > 0) {
                    seconds--; // Decrement seconds
                } else {
                    clearInterval(intervalId); // Stop the countdown
                    alert("Countdown finished. Switching to counting up!");
                    countdownMode = false; // Switch to counting up
                    seconds = 0; // Reset seconds to 0 to start counting up
                }
            } else {
               
                seconds++;
            }
            renderApp();
        }

        if (seconds === 10 && !countdownMode) {
            alert("You've reached 10 seconds!");
        }
    }, 1000); 
};


renderApp();


export const startCounting = () => {
    if (!isRunning) {
        isRunning = true; // Set the running state
        startTimer(); // Start the timer
    }
};

export const stopTimer = () => {
    isRunning = false; 
    clearInterval(intervalId); 
};

export const resetTimer = () => {
    clearInterval(intervalId); 
    seconds = 0; 
    isRunning = false; 
    countdownMode = false; 
    renderApp(); 
};

export const startCountdown = () => {
    if (isRunning) {
        clearInterval(intervalId);
    }
    seconds = 10; 
    countdownMode = true; 
    isRunning = true; 
    startTimer(); 
};
