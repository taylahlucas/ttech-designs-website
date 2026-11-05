import { site } from "../data/content";

export function Contact() {
  return (
    <section className="page-intro">
      <p className="pill">
        <span className="dot" />
        Contact
      </p>
      <h1>
        Get in <span className="accent">touch</span>
      </h1>
      <p className="lede">
        To contact us, please send an email to{" "}
        <a className="email-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
    </section>
  );
}
