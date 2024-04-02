import React from "react";
import "./calendar.css";

interface Calendar {
  date: number;
  day: string;
}

function Calendar({ date, day }: Calendar) {
  let currentDay = new Date().getDate();
  return (
    <div
      className={
        date === currentDay ? "calendar-button current-day" : "calendar-button"
      }
    >
      <div className="day">{day}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default Calendar;
