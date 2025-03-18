import { useEffect, useState } from "react";
import { changeMonth, getViewRange, dayNames, months } from "./utils.ts";
import DayCard from "./DayCard.tsx";
import { Event, JsonData } from "./types.ts";

export default function Events() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [data, setData] = useState<Event[]>();
  const [viewRange, setViewRange] = useState<[Date, Date]>(
    getViewRange(today.getFullYear(), today.getMonth()),
  );

  function RenderDays(startDate: Date, endDate: Date) {
    const totalDays =
      Math.ceil(
        (endDate.valueOf() - startDate.valueOf()) / (1000 * 60 * 60 * 24),
      ) + 1;

    return (
      <>
        {Array.from({ length: totalDays }, (_, index) => {
          const currentDate = new Date(startDate);
          currentDate.setDate(startDate.getDate() + index);
          let events: Event[] = [];

          if (data) {
            events = data.filter(
              (event) => event.date === currentDate.getDate(),
            );
          }

          return (
            <DayCard key={index} date={currentDate.getDate()} events={events} />
          );
        })}
      </>
    );
  }

  useEffect(() => {
    setViewRange(
      getViewRange(currentDate.getFullYear(), currentDate.getMonth()),
    );

    const fetchData = async (): Promise<JsonData> => {
      const eventData = (await import(
        `../../data/events/${currentDate.getFullYear().toString()}.json`
      )) as { default: JsonData };

      return eventData.default;
    };

    const currentMonth = months[currentDate.getMonth()];

    fetchData()
      .then((json) => {
        setData(json[currentMonth]);
      })
      .catch(console.error);
  }, [currentDate]);

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
            <span
              className="mx-12 text-3xl"
              onClick={() => {
                console.log(data);
              }}
            >
              {`${months[currentDate.getMonth()]} ${currentDate.getFullYear().toString()}`}
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
            {RenderDays(viewRange[0], viewRange[1])}
          </div>
        </div>
      </section>
    </main>
  );
}
