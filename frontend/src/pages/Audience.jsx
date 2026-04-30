import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const CARDS = [
  { n: "01", title: "Real Exposure Signals", body: "SYNC captures real campaign exposure across screens and platforms, creating a single-source view of how audiences encounter media." },
  { n: "02", title: "Outcome Behaviour", body: "Exposure is connected to actions such as brand search, commerce search, app activity and add-to-cart events." },
  { n: "03", title: "Propensity Modelling", body: "SYNC identifies which audience, platform, screen, time and frequency conditions are more likely to create response." },
  { n: "04", title: "Micro-Flight Activation", body: "Campaigns are broken into smaller media cells so budgets can move toward the audience conditions that perform better." },
  { n: "05", title: "Continuous Learning", body: "Every campaign improves the model by feeding performance learnings back into future planning and optimisation." },
];

const QUESTIONS = [
  "Which audience groups are more likely to search after exposure?",
  "Which platform and screen combinations create stronger response?",
  "Which dayparts perform better for each audience type?",
  "Where is frequency helping, and where is it becoming waste?",
  "Which exposed cohorts perform better than similar unexposed cohorts?",
];

const FLOW = [
  "Exposure",
  "Behaviour",
  "Propensity",
  "Micro-Flights",
  "Activation",
  "Learning Loop",
];

function FlowDiagram() {
  return (
    <div className="aud-flow" role="img" aria-label="Audience intelligence flow: Exposure to Behaviour to Propensity to Micro-Flights to Activation to Learning Loop">
      {FLOW.map((label, i) => (
        <div key={label} className="aud-flow-step">
          <span className="aud-flow-index">{String(i + 1).padStart(2, "0")}</span>
          <span className="aud-flow-label">{label}</span>
          {i < FLOW.length - 1 && <span className="aud-flow-arrow" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export default function Audience() {
  return (
    <div className="page-fade" data-testid="audience-page">
      <Seo
        title="Audience Intelligence for Cross-Media Measurement"
        description="SYNC builds outcome-ready audiences from real cross-media exposure and consumer behaviour across TV, OTT, CTV, YouTube, mobile and commerce journeys."
        path="/audience"
        keywords={["cross-media audience intelligence", "audience measurement", "cross-media audience planning", "outcome-based audience targeting", "media activation", "propensity modelling", "single-source panel", "incremental reach", "campaign optimisation"]}
      />

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Audience</span>
            <h1 className="about-hero-title">Audiences should not be guessed.<br />They should be observed, understood, and activated with evidence.</h1>
            <p className="lead about-hero-lead">
              SYNC builds audience intelligence from real cross-media exposure and real consumer actions. Our first-party single-source panel captures how people are exposed to campaigns across TV, OTT, CTV, YouTube, mobile and commerce journeys. These exposure signals are connected with downstream behaviour such as brand search, commerce search, app activity and add-to-cart events. This allows SYNC to move beyond broad demographic targeting and build calibrated audience models that show which people, platforms, screens, contexts, dayparts and frequency levels are more likely to create business outcomes.
            </p>
            <div className="about-hero-cta">
              <Link to="/contact" className="btn btn-primary" data-testid="audience-primary-cta">
                Turn exposure into audience intelligence <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* System flow visual */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">How it works</span>
              <h2>From exposure to activation — one continuous loop.</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <FlowDiagram />
          </Reveal>
        </div>
      </section>

      {/* Section 1 */}
      <section className="tile tile-alt">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 860 }}>
              <span className="eyebrow">The shift</span>
              <h2>From Demographic Targeting to Behaviour-Led Audiences</h2>
              <p style={{ marginTop: 22 }}>Most media plans still begin with broad audience definitions: age, gender, geography, income group or consumer segment. These are useful starting points. But they do not answer the more important question: which exposure actually creates response?</p>
              <p style={{ marginTop: 14 }}>SYNC goes deeper. We study how real people behave after media exposure. Did they search for the brand? Did they visit a commerce platform? Did they open an app? Did they add a product to cart? Did the response improve when the exposure happened on a specific screen, platform, content context or time of day?</p>
              <p style={{ marginTop: 14 }}>This helps brands understand not just who they reached, but which audience conditions created measurable business response.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — cards */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Approach</span>
              <h2>How SYNC Builds Outcome-Ready Audiences</h2>
            </div>
          </Reveal>
          <div className="diff-grid">
            {CARDS.map((c, i) => (
              <Reveal key={c.n} delay={(i % 3) * 90}>
                <article className="diff-card">
                  <span className="diff-icon" style={{ fontWeight: 700, fontSize: 14 }}>{c.n}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="tile tile-alt">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 860 }}>
              <span className="eyebrow">Layer 1</span>
              <h2>Outcome Propensity Layer</h2>
              <p style={{ marginTop: 22 }}>Outcome propensity means the likelihood that a specific audience, exposed in a specific media condition, will take a desired action. SYNC studies exposure and behaviour together to identify where response is stronger or weaker than the campaign baseline.</p>
              <p style={{ marginTop: 14 }}>For example, one audience group may respond better to mobile video in the afternoon. Another may respond better to YouTube in the evening. Some may need repeated exposure before they act, while others may show quick search or commerce intent after fewer exposures.</p>
              <p style={{ marginTop: 14 }}>SYNC turns these behavioural patterns into audience intelligence that can guide planning, buying and optimisation. This layer helps brands answer:</p>
              <ul className="what-bullets" style={{ marginTop: 14 }}>
                {QUESTIONS.map((q) => (
                  <li key={q}><span className="what-dot" />{q}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 4 */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 860 }}>
              <span className="eyebrow">Layer 2</span>
              <h2>Micro-Flight Planning Layer</h2>
              <p style={{ marginTop: 22 }}>A micro-flight is a smaller media cell built around a specific audience, platform, screen, context, time and frequency condition. Instead of treating a campaign as one large media buy, SYNC breaks it into smaller exposure cells. Each cell can be evaluated based on its likelihood to drive search, commerce action, add-to-cart behaviour or incremental reach.</p>
              <p style={{ marginTop: 14 }}>This allows budgets to move toward the audience conditions that are more likely to produce outcomes, and away from cells where reach is duplicated, frequency is saturated or response is weak.</p>
              <p style={{ marginTop: 14 }}>SYNC does not simply buy broad media. SYNC identifies which exposure conditions matter and uses those learnings to guide campaign allocation. A broad campaign may begin with a simple target audience. SYNC then refines it into more precise audience opportunities based on observed behaviour: platform, screen, content, geography, daypart, frequency and outcome response.</p>
              <p style={{ marginTop: 14 }}>This makes audience planning more accountable, more adaptive and more connected to business impact.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 5 */}
      <section className="tile tile-alt">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 860 }}>
              <span className="eyebrow">Continuous learning</span>
              <h2>Built to Learn From Every Campaign</h2>
              <p style={{ marginTop: 22 }}>SYNC does not build a static audience model once and reuse it blindly. Every campaign adds new learning. We test which micro-flights delivered stronger search lift, commerce search, add-to-cart behaviour, incremental reach or improved frequency efficiency. These learnings are fed back into the audience model, making future planning sharper.</p>
              <p style={{ marginTop: 14 }}>Over time, SYNC helps brands understand not only where their audiences are, but how different audience groups respond across media environments.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 6 */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 860 }}>
              <span className="eyebrow">Scale</span>
              <h2>Audience Intelligence That Scales</h2>
              <p style={{ marginTop: 22 }}>SYNC's audience models are built from observed exposure and outcome behaviour, then calibrated for activation across the larger addressable media universe. This allows brands to use real behavioural evidence to guide media decisions across TV, OTT, CTV, YouTube, mobile, digital and commerce-linked environments.</p>
              <p style={{ marginTop: 14 }}>The result is a more intelligent audience system: one that connects measurement, planning, activation and optimisation into a continuous loop.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="cta-band">
        <Reveal>
          <span className="eyebrow">Move from assumed audiences to outcome-ready audiences</span>
          <h2>Build audiences from real behaviour.</h2>
          <p>SYNC identifies which exposure conditions create response, converts those learnings into actionable micro-flights, and continuously improves campaign planning with every new campaign.</p>
          <div style={{ marginTop: 30, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn-primary" data-testid="audience-cta-primary">Build audiences from real behaviour</Link>
            <Link to="/products" className="btn btn-secondary" data-testid="audience-cta-secondary">See how SYNC measures outcomes</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
