import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 bg-primary/80 backdrop-blur-lg py-4 flex justify-around items-center">
      <NavLink className="flex gap-2 items-center" to="/">
        <img
          className="w-12 pr-2"
          src={"/images/coffee_cup.png"}
          alt="Code Cafe Logo"
        />
        <h1 className="text-secondary text-3xl">Code Cafe</h1>
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
