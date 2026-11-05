import { features } from "../data/content";
import { FeatureIcon } from "./Icons";

export function FeatureGrid() {
  return (
    <section className="features" aria-label="What we focus on">
      {features.map((feature) => (
        <article key={feature.title} className="feature">
          <span className="feature-icon">
            <FeatureIcon name={feature.icon} />
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      ))}
    </section>
  );
}
