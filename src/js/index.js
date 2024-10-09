// Import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

let seconds = 0; // Global variable to track seconds
let isRunning = false; // Timer running state
let countdownMode = false; // True if countdown is active
let intervalId = null; // Store the interval ID

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
                // Count up logic
                seconds++; // Increment seconds
            }
            renderApp(); // Update the UI
        }

        if (seconds === 10 && !countdownMode) {
            alert("You've reached 10 seconds!"); // Alert when 10 seconds is reached
        }
    }, 1000); // Update every second
};

// Render the initial app
renderApp();

// Function to start counting when the "Start" button is pressed
export const startCounting = () => {
    if (!isRunning) {
        isRunning = true; // Set the running state
        startTimer(); // Start the timer
    }
};

// Control functions
export const stopTimer = () => {
    isRunning = false; // Stop the timer
    clearInterval(intervalId); // Clear the interval
};

export const resetTimer = () => {
    clearInterval(intervalId); // Clear the interval
    seconds = 0; // Reset seconds to 0
    isRunning = false; // Stop the timer
    countdownMode = false; // Reset to counting up mode
    renderApp(); // Update the UI
};

export const startCountdown = () => {
    if (isRunning) {
        clearInterval(intervalId); // Clear any existing intervals
    }
    seconds = 10; // Start countdown from 10
    countdownMode = true; // Activate countdown mode
    isRunning = true; // Start the timer
    startTimer(); // Start the countdown
};
