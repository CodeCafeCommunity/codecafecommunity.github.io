import { render, screen } from "@testing-library/react";
import Home from "./index.tsx";

describe("Home", () => {
  const setup = () => {
    render(<Home />);
  };

  it("renders the Hero content", () => {
    setup();

    expect(screen.getByText("Where Code Meets Community")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Join us" })).toBeInTheDocument();
  });

  it("renders the Features content", () => {
    setup();

    expect(screen.getByText("Active Community")).toBeInTheDocument();
    expect(
      screen.getByText(/Connect with like-minded developers/),
    ).toBeInTheDocument();
  });

  it("renders the Showcase content", () => {
    setup();

    expect(screen.getByText("Community Showcase")).toBeInTheDocument();
  });

  it("renders the CTA content", () => {
    setup();

    expect(
      screen.getByText("Ready to Join Our Community?"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Join Code Cafe" }),
    ).toBeInTheDocument();
  });
});
