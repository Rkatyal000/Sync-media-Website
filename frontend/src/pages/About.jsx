import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

/**
 * About SYNC — text-first, strong H2 hierarchy.
 * All on-page copy is verbatim from "SYNC About Page Research and Final Copy".
 */

const PROBLEM = [
  {
    title: "Siloed reporting",
    body: "TV, OTT, social and digital reporting often live in separate systems.",
  },
  {
    title: "Inflated reach",
    body: "Without de-duplication, the same audience can be counted more than once.",
  },
  {
    title: "Weak outcome visibility",
    body: "Impressions and clicks alone rarely explain what moved search, commerce, app usage or business KPIs.",
  },
];

const APPROACH = [
  {
    title: "Single-source cross-media measurement",
    body: "One audience view across linear TV, OTT, YouTube, Meta and digital.",
  },
  {
    title: "De-duplicated reach and frequency",
    body: "A clearer understanding of true reach, overlap, incremental contribution and exposure pressure.",
  },
  {
    title: "Incrementality and causal impact",
    body: "A better basis for understanding what media added, what merely overlapped, and where budget should move.",
  },
  {
    title: "People-level attribution",
    body: "Exposure histories linked to downstream behaviour with enough granularity to support real planning and optimisation questions.",
  },
  {
    title: "Decision support, not just reporting",
    body: "Outputs designed for action: where to rebalance spend, where frequency is wasteful, and which combinations are driving results.",
  },
  {
    title: "AI-driven insight generation",
    body: "AI used to surface patterns, explain performance shifts and make complex cross-media evidence easier for business teams to use.",
  },
];

const AUDIENCES = [
  {
    title: "Advertisers",
    body: "Understand what media is actually adding across screens, how much duplication exists, and what exposure is changing in the market.",
  },
  {
    title: "Agencies",
    body: "Plan more clearly, defend recommendations with stronger evidence, and optimise with a more complete cross-platform view.",
  },
  {
    title: "Broadcasters and publishers",
    body: "Show how inventory contributes incremental audiences and commercial outcomes, not just delivery.",
  },
];

const STEPS = [
  {
    n: "01",
    label: "Data",
    body: "Capture exposure signals across linear TV, OTT, YouTube, Meta and digital.",
  },
  {
    n: "02",
    label: "Measurement",
    body: "Build a unified exposure history for the same audience, then analyse reach, frequency, overlap and incremental contribution.",
  },
  {
    n: "03",
    label: "Action",
    body: "Connect exposure to search, commerce, app behaviour and business KPIs so teams can optimise spend with greater confidence.",
  },
];

const ARTIFICIAL_SOCIETY = [
  {
    title: "Vision",
    body: "Move from explaining campaigns after they end to evaluating likely media effects before key decisions are made.",
  },
  {
    title: "Mission",
    body: "Give advertisers, agencies and broadcasters a practical environment for exploring how changes in mix, reach, overlap and frequency may influence audience growth and business outcomes.",
  },
  {
    title: "Deliverables",
    body: "A scenario planner for cross-screen allocation; duplication and frequency-pressure forecasts; incremental reach and outcome-response hypotheses; AI-generated planning notes, risk flags and optimisation recommendations.",
  },
];

const ROADMAP = [
  {
    period: "2026 · Q2",
    items: [
      "Define use cases",
      "Audience graph design",
      "Decision-support briefs",
    ],
  },
  {
    period: "2026 · Q3",
    items: ["Scenario planner MVP", "Overlap and frequency simulation"],
  },
  {
    period: "2026 · Q4",
    items: [
      "Outcome-response modelling",
      "AI-generated planning recommendations",
    ],
  },
  {
    period: "2027 · H1",
    items: [
      "Closed-loop learning",
      "Measured outcomes feed back into forecasts",
    ],
  },
];

const LEADERSHIP = [
  {
    name: "Anubhav Sharma",
    role: "Founder & CEO",
    body: "Anubhav started SYNC to fix a simple but expensive gap in modern advertising: media became cross-screen, but measurement stayed siloed. He leads company strategy, category direction and the push to make media decisions more grounded in audience truth and real outcomes.",
  },
  {
    name: "Vikas Saxena",
    role: "Co-founder & COO",
    body: "Vikas helps translate the company's category vision into an operating system: partnerships, execution discipline and the commercial infrastructure needed to scale a measurement business that clients can trust.",
  },
  {
    name: "Prakhar Gupta",
    role: "Chief Product Officer",
    body: "Prakhar leads product, data and platform design across measurement, outcome-linkage and AI-assisted insight generation. His focus is turning complexity into tools that business teams can actually act on.",
  },
  {
    name: "Jeena Duggal",
    role: "Chief Revenue Officer",
    body: "Jeena leads market adoption, revenue growth and client relationships. Her role is to make sure the platform solves real commercial problems for advertisers, agencies and media owners, not just analytical ones.",
  },
];

const INVESTORS = [
  {
    role: "Director & Investor",
    body: "Advises on governance, category development and disciplined long-term scale.",
  },
  {
    role: "Director & Investor",
    body: "Supports strategic partnerships, operating maturity and board-level decision-making.",
  },
];

export default function About() {
  return (
    <div className="page-fade about-page" data-testid="about-page">
      <Seo
        title="About SYNC — single-source cross-media measurement"
        description="SYNC is a single-source cross-media measurement and outcomes optimisation company. We measure the same people across linear TV, OTT, YouTube, Meta and digital, de-duplicate reach and frequency, and connect ad exposure to downstream outcomes."
        path="/about"
        keywords={[
          "about SYNC",
          "single-source cross-media measurement",
          "cross-media measurement India",
          "de-duplicated reach and frequency",
          "incrementality measurement",
          "people-level attribution",
          "SYNC Artificial Society",
          "outcome optimisation",
        ]}
      />

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About SYNC</span>
            <h1 className="about-hero-title">
              We show brands what media is really doing across screens.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead about-hero-lead">
              SYNC is a single-source cross-media measurement and outcomes optimisation company. SYNC measures the same people across linear TV, OTT, YouTube, Meta and digital. SYNC de-duplicates reach and frequency across platforms. SYNC connects ad exposure to downstream outcomes such as search, commerce and app behaviour.
            </p>
            <p className="lead about-hero-lead" style={{ marginTop: 18 }}>
              That gives advertisers, agencies and broadcasters one clearer view of reach, overlap, incremental audience contribution and business impact.
            </p>
            <div className="about-hero-cta">
              <Link to="/products" className="btn btn-primary" data-testid="about-cta-platform">
                See the Platform <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary" data-testid="about-cta-demo">
                Book a Demo <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="tile tile-alt">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 880 }}>
              <span className="eyebrow">The problem</span>
              <h2>Media has fragmented. Measurement usually has not.</h2>
              <p style={{ marginTop: 22 }}>
                People move across screens all day, but reporting still often arrives platform by platform. That can overstate reach, hide overlap, miss frequency waste and separate media exposure from real business outcomes.
              </p>
              <p style={{ marginTop: 14 }}>
                Brands then face a familiar problem: they can see delivery, but not always contribution. They know what ran. They do not always know what added new audiences, what duplicated old ones, or what actually changed behaviour.
              </p>
            </div>
          </Reveal>
          <div className="diff-grid" style={{ marginTop: 36 }}>
            {PROBLEM.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <article className="diff-card">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 880 }}>
              <span className="eyebrow">Our approach</span>
              <h2>We measure audiences once, then connect them to outcomes.</h2>
              <p style={{ marginTop: 22 }}>
                SYNC is built to replace stitched-together views with one measurement system that follows exposure across screens and links it to what happens next. The goal is not more reporting. The goal is better decisions.
              </p>
            </div>
          </Reveal>
          <div className="diff-grid" style={{ marginTop: 36 }}>
            {APPROACH.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <article className="diff-card">
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="philosophy" data-testid="about-mission">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Mission</span>
            <h2 className="philosophy-h2">
              <span className="phi-line">Our mission is to make media measurement</span>
              <span className="phi-divider" aria-hidden="true" />
              <span className="phi-line">more accurate, transparent and actionable.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="tile tile-alt">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 880 }}>
              <span className="eyebrow">Who we serve</span>
              <h2>Built for the teams making and defending media decisions.</h2>
            </div>
          </Reveal>
          <div className="diff-grid" style={{ marginTop: 36 }}>
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <article className="diff-card">
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Data → Measurement → Action */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 880 }}>
              <span className="eyebrow">How it works</span>
              <h2>Data to measurement. Measurement to action.</h2>
            </div>
          </Reveal>
          <div className="about-steps" style={{ marginTop: 40 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <article className="about-step">
                  <span className="about-step-num">{s.n}</span>
                  <h3 className="about-step-title">Step {s.n.replace(/^0/, "")} — {s.label}</h3>
                  <p>{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SYNC ARTIFICIAL SOCIETY */}
      <section className="tile tile-alt">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 880 }}>
              <span className="eyebrow">Looking ahead</span>
              <h2>SYNC Artificial Society</h2>
              <p style={{ marginTop: 22 }}>
                SYNC Artificial Society is our forward-looking decision-intelligence layer. It is designed to sit on top of measured exposure, audience overlap and outcome signals so teams can test scenarios before budgets move.
              </p>
            </div>
          </Reveal>
          <div className="diff-grid" style={{ marginTop: 36 }}>
            {ARTIFICIAL_SOCIETY.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <article className="diff-card">
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Roadmap timeline */}
          <Reveal delay={150}>
            <div className="about-roadmap" style={{ marginTop: 56 }}>
              <span className="eyebrow">Roadmap</span>
              <h3 className="about-roadmap-title">SYNC Artificial Society roadmap</h3>
              <ol className="about-roadmap-list" data-testid="about-roadmap">
                {ROADMAP.map((r) => (
                  <li key={r.period} className="about-roadmap-item">
                    <span className="about-roadmap-period">{r.period}</span>
                    <ul className="about-roadmap-points">
                      {r.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 880 }}>
              <span className="eyebrow">Leadership team</span>
              <h2>The team behind SYNC.</h2>
            </div>
          </Reveal>
          <div className="about-people" style={{ marginTop: 40 }}>
            {LEADERSHIP.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 100}>
                <article className="about-person" data-testid={`about-person-${p.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="about-person-mono" aria-hidden="true">
                    {p.name
                      .split(" ")
                      .map((s) => s[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                  <div>
                    <h3 className="about-person-name">{p.name}</h3>
                    <span className="about-person-role">{p.role}</span>
                    <p className="about-person-body">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Investors */}
          <Reveal delay={120}>
            <div style={{ marginTop: 56, maxWidth: 880 }}>
              <span className="eyebrow">Investor lines</span>
              <h3 className="about-roadmap-title">Board &amp; capital partners</h3>
            </div>
          </Reveal>
          <div className="diff-grid" style={{ marginTop: 22 }}>
            {INVESTORS.map((inv, i) => (
              <Reveal key={`${inv.role}-${i}`} delay={(i % 2) * 90}>
                <article className="diff-card">
                  <h3>{inv.role}</h3>
                  <p>{inv.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TEAMS TRUST SYNC */}
      <section className="tile tile-alt">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 880 }}>
              <span className="eyebrow">Why teams trust SYNC</span>
              <h2>Built for serious media decisions.</h2>
              <p style={{ marginTop: 22 }}>
                SYNC is built for serious media decisions: one clearer audience view, measurable overlap and incrementality, explainable methodology, and outcome linkage that helps teams move from reporting to action.
              </p>
              <p style={{ marginTop: 14 }}>
                In April 2026, JioStar publicly described a deterministic, single-source attribution study by Worldpanel by Numerator in partnership with SYNC, linking exposure across TV, OTT and digital to outcomes such as search activity, website visits and transactions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" data-testid="about-cta-band">
        <Reveal>
          <span className="eyebrow">Talk to us</span>
          <h2>See one clearer view of media performance.</h2>
          <p>
            If you want to understand what each screen is adding, where duplication is reducing efficiency, and how exposure connects to outcomes, we should talk.
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn-primary" data-testid="about-final-cta-demo">Book a Demo</Link>
            <Link to="/products" className="btn btn-secondary" data-testid="about-final-cta-platform">See the Platform <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
