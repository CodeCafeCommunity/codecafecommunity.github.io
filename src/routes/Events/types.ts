export interface Event {
  title: string;
  date: Date;
  // Convert to Staff type in later PR after converting from interface
  host: string;
  description: string;
}
