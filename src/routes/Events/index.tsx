import { useState } from "react";
import { changeMonth, dayNames, months } from "./utils.ts";
import times from "lodash/times";
import DayCard from "./DayCard.tsx";

export default function Events() {
  // const today = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  return (
    <main className="flex h-full w-full flex-col">
      <section className="flex h-full flex-col justify-center">
        <h3 className="my-12 text-center text-3xl text-secondary">Events</h3>
        <div className="flex w-full flex-col items-center justify-center bg-background px-16">
          <div className="mb-6 flex w-full justify-center">
            <button
              className="text-3xl"
              onClick={() => {
                const newDate = changeMonth(-1, currentDate);
                setCurrentDate(new Date(newDate.toDateString()));
              }}
            >
              &#60;
            </button>
            <span className="mx-12 text-3xl">
              {months[currentDate.getMonth()][0]}
            </span>
            <button
              className="text-3xl"
              onClick={() => {
                const newDate = changeMonth(1, currentDate);
                setCurrentDate(new Date(newDate.toDateString()));
              }}
            >
              &#62;
            </button>
          </div>
          <div className="grid w-full grid-cols-7 gap-4">
            {dayNames.map((dayName, i) => (
              <span key={i} className="text-center">
                {dayName}
              </span>
            ))}
          </div>
          <div className="grid w-full grid-cols-7 gap-4">
            {times(months[currentDate.getMonth()][1], (i) => (
              <DayCard key={i} date={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
