export interface JsonData {
  pageName: string;
  entries: Entry[];
}

export interface Entry {
  title: string;
  url: string;
  tags: string[];
}
