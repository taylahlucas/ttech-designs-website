import { Link } from "react-router-dom";
import { CheckIcon, ExternalIcon, GridIcon, RocketIcon } from "../components/Icons";
import { Logo } from "../components/Logo";
import { Phones } from "../components/Phones";
import { completionist, site } from "../data/content";

export function Apps() {
  const website = site.completionistUrl;

  return (
    <>
      <section className="page-intro">
        <p className="pill">
          <GridIcon />
          Our Portfolio
        </p>
        <h1>
          Our <span className="accent">Apps</span>
        </h1>
        <p className="lede">
          A collection of thoughtfully designed applications
          <br />
          built by TTech Designs Ltd.
        </p>
      </section>

      <article className="app-card" id="completionist">
        <div className="app-copy">
          <div className="app-heading">
            <Logo size={54} />
            <div>
              <h2>{completionist.name}</h2>
              <p>{completionist.tagline}</p>
            </div>
          </div>
          <p className="app-desc">{completionist.description}</p>
          <ul className="ticks">
            {completionist.points.map((point) => (
              <li key={point}>
                <span className="tick">
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="btn-row">
            <Link to="/contact?topic=completionist" className="btn btn-primary">
              Learn More
            </Link>
            {website ? (
              <a className="btn btn-ghost" href={website} target="_blank" rel="noreferrer">
                Visit Website
                <ExternalIcon />
              </a>
            ) : (
              <Link to="/contact?topic=completionist" className="btn btn-ghost">
                Visit Website
                <ExternalIcon />
              </Link>
            )}
          </div>
        </div>
        <Phones compact />
      </article>

      <section className="soon">
        <div>
          <h2>More Apps Coming Soon...</h2>
          <p>
            We're always working on new ideas. Stay tuned for more exciting apps from TTech Designs
            Ltd.
          </p>
        </div>
        <div className="soon-card">
          <span className="soon-icon">
            <RocketIcon />
          </span>
          <p>
            Something new
            <br />
            is on the way...
          </p>
        </div>
      </section>
    </>
  );
}
