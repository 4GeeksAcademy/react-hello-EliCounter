// Import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

let seconds = 0;
let isRunning = false;  // Timer will only start when the user clicks 'Start'
let countdownMode = false;  // Initially, the timer counts up
let intervalId = null;

const root = ReactDOM.createRoot(document.getElementById('app'));

const renderApp = () => {
    root.render(
        <div>
            <Home />   {/* Always render buttons */}
            <SecondsCounter timer={seconds} />  {/* Always render the timer */}
        </div>
    );
};

const startTimer = () => {
    intervalId = setInterval(() => {
        if (isRunning) {
            if (countdownMode) {
                // Countdown logic
                seconds = seconds > 0 ? seconds - 1 : 0;

                // If countdown reaches 0, switch back to counting up
                if (seconds === 0) {
                    countdownMode = false;
                    alert("Countdown finished. Switching to counting up!");
                }
            } else {
                // Count up logic
                seconds++;
            }
            renderApp();  // Update the UI on every tick
        }

        if (seconds === 10 && !countdownMode) {
            alert("You've reached 10 seconds!");
        }
    }, 1000);
};

// Render the initial app
renderApp();

// Function to start counting when the "Start" button is pressed
export const startCounting = () => {
    if (!intervalId) {
        // If no interval is running, start the timer
        isRunning = true;
        startTimer();
    }
};

// Control functions
export const stopTimer = () => {
    isRunning = false;
};

export const resumeTimer = () => {
    isRunning = true;
};

export const resetTimer = () => {
    clearInterval(intervalId);  // Clear the existing interval
    intervalId = null;          // Reset the intervalId
    seconds = 0;                // Reset seconds to 0
    isRunning = false;          // Pause the timer
    countdownMode = false;      // Reset to counting up mode
    renderApp();                // Reset the UI
};

export const startCountdown = () => {
    seconds = 10;               // Countdown starts from 10
    countdownMode = true;
    isRunning = true;
    if (!intervalId) startTimer();  // Ensure the interval starts if not already running
};
