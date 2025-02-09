import { Entry } from "./types";

export const sortEntries = (entries: Entry[]) =>
  entries.sort((a, b) => (sanitize(a.title) < sanitize(b.title) ? -1 : 1));

const sanitize = (title: string) =>
  title.toLowerCase().replace("the", "").trim();
