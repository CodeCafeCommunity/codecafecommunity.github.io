import { Entry } from "./types";

export const sortEntries = (entries: Entry[]) =>
  entries.sort((a, b) => (sanitize(a.title) < sanitize(b.title) ? -1 : 1));

const sanitize = (title: string) =>
  title.toLowerCase().replace("the", "").trim();

export const extractTags = (entries: Entry[]) => [
  ...new Set(
    entries.reduce<string[]>((acc, cur) => {
      acc.push(...cur.tags);
      return acc;
    }, []),
  ),
];
