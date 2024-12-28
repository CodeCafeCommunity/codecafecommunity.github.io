import { Link } from "react-router";
import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 bg-secondary flex justify-around">
      <div className="footer-container text-primary">
        <h4 className="text-xl font-bold flex items-center gap-2">
          <Code size={48} className="text-accent" />
          Code Cafe
        </h4>
        <p className="text-sm">Your home for coding and community</p>
      </div>
      <div className="footer-container text-primary">
        <h4 className="text-xl font-bold mb-4">Community</h4>
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
        <h4 className="text-xl font-bold mb-4">Resources</h4>
        <ul className="list-none">
          <li className="mb-3 text-sm">Documentation</li>
          <li className="mb-3 text-sm">Blog</li>
          <li className="mb-3 text-sm">GitHub</li>
        </ul>
      </div>
    </footer>
  );
}
