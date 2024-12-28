import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-secondary py-4 flex justify-around items-center">
      <h1 className="text-primary text-3xl">Code Cafe</h1>
      <nav>
        <ul className="flex list-none gap-3">
          <li>
            <NavLink
              className="text-primary hover:text-accent transition-all"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-primary hover:text-accent transition-colors"
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-primary hover:text-accent transition-colors"
              to="/events"
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
