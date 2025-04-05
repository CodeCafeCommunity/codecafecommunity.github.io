import { extractTags, sortEntries } from "./utils";

describe("sortEntries", () => {
  it("sorts entries alphabetically by title", () => {
    const first = { title: "First Entry", url: "first.com", tags: ["foo"] };
    const second = { title: "Second", url: "second.com", tags: ["bar"] };
    const third = {
      title: "Another Entry",
      url: "another.com",
      tags: ["foo", "bar"],
    };

    expect(sortEntries([first, second, third])).toEqual([third, first, second]);
  });

  it("disregards leading 'The' when sorting titles", () => {
    const first = { title: "The First Entry", url: "first.com", tags: ["foo"] };
    const second = { title: "Go Second", url: "second.com", tags: ["bar"] };
    const third = {
      title: "Another Entry",
      url: "another.com",
      tags: ["foo", "bar"],
    };

    expect(sortEntries([first, second, third])).toEqual([third, first, second]);
  });
});

describe("extractTags", () => {
  it("returns an array of unique tags from all of the entries provided", () => {
    const first = {
      title: "First Entry",
      url: "first.com",
      tags: ["foo", "baz"],
    };
    const second = { title: "Second", url: "second.com", tags: ["bar"] };
    const third = {
      title: "Another Entry",
      url: "another.com",
      tags: ["foo", "bar"],
    };

    expect(extractTags([first, second, third])).toEqual(["foo", "baz", "bar"]);
  });
});
