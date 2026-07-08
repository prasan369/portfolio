import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero-eyebrow mono">
        <span className="dot" />
        Open to internships &amp; collaborations
      </div>
      <h1 className="hero-title">
        I build the parts of AI that <em>actually run</em> — agents,
        pipelines, and the assistant <em>watching my own machine</em>.
      </h1>
      <p className="hero-sub">
        BIT student in Kathmandu, currently deep in LangGraph and Groq,
        building toward a wearable version of the same idea.
      </p>
      <div className="hero-actions">
        <Link className="link-arrow" to="/work">Selected work</Link>
        <Link className="link-arrow" to="/contact">Get in touch</Link>
      </div>
    </section>
  );
}
