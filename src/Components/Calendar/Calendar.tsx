import React from "react";

interface Calendar {
  date: number;
  day: string;
}

function Calendar({ date, day }: Calendar) {
  let currentDay = new Date().getDate();
  return (
    <div
      className={
        date === currentDay
          ? "w-[80px] h-[100px] bg-[#5272d3] p-[10px] flex flex-col items-center rounded-xl mt-5"
          : "w-[80px] h-[100px] bg-[#bb88dd] p-[10px] flex flex-col items-center rounded-xl mt-5"
      }
    >
      <div className="text-[large] text-[black]">{day}</div>
      <div className="bg-[white] rounded-[50%] w-[50px] h-[50px] flex justify-center items-center text-[black]">
        {date}
      </div>
    </div>
  );
}

export default Calendar;
