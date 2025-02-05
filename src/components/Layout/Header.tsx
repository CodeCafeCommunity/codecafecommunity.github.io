import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-around bg-primary/80 py-4 backdrop-blur-lg">
      <NavLink className="flex items-center gap-2" to="/">
        <img
          className="w-12 pr-2"
          src={"/images/coffee_cup.png"}
          alt="Code Cafe Logo"
        />
        <h1 className="text-3xl text-secondary">Code Cafe</h1>
      </NavLink>
      <nav>
        <ul className="flex list-none gap-3 text-secondary">
          <li>
            <NavLink className="hover:text-accent" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-accent" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-accent" to="/events">
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
