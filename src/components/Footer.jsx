import { Link } from "react-router-dom";
import { site } from "../data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <Link to="/" className="brand">
          <Logo size={30} />
          <span>TTech Designs Ltd.</span>
        </Link>
        <nav className="footer-links" aria-label="Footer">
          <Link to="/apps">Our Apps</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <p className="copyright">{site.copyright}</p>
    </footer>
  );
}
