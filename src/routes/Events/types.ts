export interface Event {
  title: string;
  date: number;
  // Convert to Staff type in later PR after converting from interface
  host: string;
  description: string;
}

export type JsonData = Record<string, Event[]>;
