import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="page-intro">
      <p className="pill">
        <span className="dot" />
        404
      </p>
      <h1>
        Page <span className="accent">not found</span>
      </h1>
      <p className="lede">That page isn't part of the site.</p>
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
    </section>
  );
}
