import { Link } from "react-router-dom";
import { FeatureGrid } from "../components/FeatureGrid";
import { ArrowRight } from "../components/Icons";
import { Laptop } from "../components/Laptop";
import { Phones } from "../components/Phones";

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="pill">
            <span className="dot" />
            Innovative Apps. Thoughtfully Designed.
          </p>
          <h1>
            Building exceptional
            <br />
            digital <span className="accent">experiences</span>
          </h1>
          <p className="lede">
            TTech Designs Ltd. creates modern, intuitive and powerful applications for everyday life.
          </p>
          <Link to="/apps" className="btn btn-primary">
            Explore Our Apps
            <ArrowRight />
          </Link>
        </div>
        <div className="hero-visual">
          <Phones />
        </div>
      </section>

      <FeatureGrid />

      <section className="about-band">
        <div className="about-copy">
          <h2>About TTech Designs Ltd.</h2>
          <p>
            We're a UK-based development studio focused on building high-quality mobile and web
            applications.
          </p>
          <p>From idea to launch, we design and build apps that make a difference.</p>
          <Link to="/about" className="btn btn-ghost">
            Learn More
            <ArrowRight />
          </Link>
        </div>
        <Laptop />
      </section>
    </>
  );
}
