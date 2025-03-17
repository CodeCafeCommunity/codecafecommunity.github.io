import { Event } from "./types.ts";

interface Props {
  date: number;
  events: Event[];
}

export default function DayCard({ date, events }: Props) {
  return (
    <div className="h-20 w-48 border-2 border-accent">
      <span>{date}</span>
      {events.map((event, i) => (
        <span key={i}>{event.title}</span>
      ))}
    </div>
  );
}
