import React, { useEffect } from 'react';

import './style.css';


export default function Countdown() {

  useEffect(() => {

    const days: HTMLElement | null = document.getElementById('days');
    const hours: HTMLElement | null = document.getElementById('hours');
    const minutes: HTMLElement | null = document.getElementById('minutes');
    const second: HTMLElement | null = document.getElementById('seconds');

    const currentYear = new Date().getFullYear();

    const newYearTime: any = new Date(`January 01 ${currentYear + 1} 00:00:00`);

    function updateCountdown() {

      const currentTime: any = new Date();
      const difference = newYearTime - currentTime;

      const d: number = Math.floor(difference / 1000 / 60 / 60 / 24);
      const h: number = Math.floor(difference / 1000 / 60 / 60) % 24;
      const m: number = Math.floor(difference / 1000 / 60) % 60;
      const s: number = Math.floor(difference / 1000) % 60;

      days!.innerHTML = d.toString();
      hours!.innerHTML = h < 10 ? '0' + h.toString() : h.toString();
      minutes!.innerHTML = m < 10 ? '0' + m.toString() : m.toString();
      second!.innerHTML = s < 10 ? '0' + s.toString() : s.toString();

    }

    setInterval(updateCountdown, 1000);

  }, [])

  return (
    <div className="countContainer">
      <div className="countdownBody">
        <div className="time">
          <small>Days</small>
          <h2 id="days" aria-hidden="true">00</h2>
        </div>
        <div className="time">
          <small>Hours</small>
          <h2 id="hours" aria-hidden="true">00</h2>
        </div>
        <div className="time">
          <small>Minutes</small>
          <h2 id="minutes" aria-hidden="true">00</h2>
        </div>
        <div className="time">
          <small>Seconds</small>
          <h2 id="seconds" aria-hidden="true">00</h2>
        </div>
      </div>
    </div>
  );
}