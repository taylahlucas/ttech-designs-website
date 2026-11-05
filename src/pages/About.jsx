import { Link } from "react-router-dom";
import { FeatureGrid } from "../components/FeatureGrid";
import { ArrowRight } from "../components/Icons";
import { Laptop } from "../components/Laptop";

export function About() {
  return (
    <>
      <section className="page-intro">
        <p className="pill">
          <span className="dot" />
          The studio
        </p>
        <h1>
          About
          <br />
          <span className="accent">TTech Designs Ltd.</span>
        </h1>
        <p className="lede">
          We're a UK-based development studio focused on building high-quality mobile and web
          applications.
        </p>
      </section>

      <section className="about-band">
        <div className="about-copy">
          <h2>From idea to launch.</h2>
          <p>
            TTech Designs Ltd. creates modern, intuitive and powerful applications for everyday
            life.
          </p>
          <p>From idea to launch, we design and build apps that make a difference.</p>
          <Link to="/apps" className="btn btn-primary">
            Explore Our Apps
            <ArrowRight />
          </Link>
        </div>
        <Laptop />
      </section>

      <FeatureGrid />
    </>
  );
}
