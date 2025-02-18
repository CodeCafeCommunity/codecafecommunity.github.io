import { Link } from "react-router";
import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-around bg-background py-16">
      <div className="footer-container text-primary">
        <h4 className="flex items-center gap-2 text-xl font-bold">
          <Code size={48} className="text-primary" />
          Code Café
        </h4>
        <p className="text-sm">Your home for coding and community</p>
      </div>
      <div className="footer-container text-primary">
        <h4 className="mb-4 text-xl font-bold">Community</h4>
        <ul className="list-none">
          <li className="mb-3 text-sm">
            <Link to="/events">Events</Link>
          </li>
          <li className="mb-3 text-sm">
            <a href="https://discord.gg/code-cafe">Discord</a>
          </li>
        </ul>
      </div>
      <div className="footer-container text-primary">
        <h4 className="mb-4 text-xl font-bold">Resources</h4>
        <ul className="list-none">
          <li className="mb-3 text-sm">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="mb-3 text-sm">Blog</li>
          <li className="mb-3 text-sm">
            <a
              href="https://github.com/CodeCafeCommunity/codecafecommunity.github.io"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
