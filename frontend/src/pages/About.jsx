import { Link } from "react-router-dom";
import { ArrowRight, Layers, Target, BarChart3, Sparkles, Brain, Database, ShieldCheck, Eye, Zap, Lock } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const PROBLEMS = [
  {
    title: "Siloed reporting",
    body: "Platforms measured independently — each in its own dashboard.",
  },
  {
    title: "Unclear overlap",
    body: "Reach overstated when audiences aren't de-duplicated across screens.",
  },
  {
    title: "Weak outcome visibility",
    body: "Impressions ≠ business impact. Most reports stop short of what matters.",
  },
];

const WHAT_WE_DO = [
  "Measure exposure across platforms",
  "De-duplicate audiences",
  "Connect to outcomes (search, commerce, apps)",
  "Optimise media decisions",
];

const DIFFERENTIATORS = [
  { icon: Layers, title: "Single-source measurement", body: "One unified audience view across every screen." },
  { icon: Target, title: "Incrementality focus", body: "What actually drove results — not what merely correlated." },
  { icon: BarChart3, title: "People-level attribution", body: "Exposure → behaviour, traced at the individual." },
  { icon: Zap, title: "Decision-first system", body: "Built for action, not for dashboards." },
  { icon: Brain, title: "AI-driven insights", body: "Explain performance shifts in plain language." },
  { icon: ShieldCheck, title: "Privacy by design", body: "Measurement that respects consent and governance." },
];

const STEPS = [
  { n: "01", label: "Data", title: "Capture exposure", body: "Across TV, OTT, YouTube, Meta and digital — at the same time, against the same people.", Icon: Database },
  { n: "02", label: "Measurement", title: "Unify the audience", body: "Create a single, de-duplicated view of who saw what, where, and how often.", Icon: Eye },
  { n: "03", label: "Decisions", title: "Connect to outcomes", body: "Tie exposure to search, commerce and app activity. Reallocate spend with evidence.", Icon: Target },
];

const TRUST = [
  { title: "Cross-media measurement", body: "Linear, OTT, YouTube, Meta, digital and commerce — measured together." },
  { title: "Outcome-driven analytics", body: "Search, marketplace, app behaviour and custom KPIs linked to exposure." },
  { title: "Enterprise use cases", body: "Built for advertisers, agencies and broadcasters operating at scale." },
];

const VALUES = [
  { name: "Accuracy", body: "If the math is wrong, the decision is wrong." },
  { name: "Transparency", body: "Methodology that holds up to scrutiny." },
  { name: "Innovation", body: "AI where it earns its place." },
  { name: "Privacy", body: "Consent and governance, by design." },
  { name: "Impact", body: "Measurement that changes what teams do next." },
];

export default function About() {
  return (
    <div className="page-fade" data-testid="about-page">
      <Seo
        title="About"
        description="SYNC is a single-source cross-media measurement and outcomes optimisation company — measuring the same people across TV, OTT, YouTube, Meta and digital, then connecting media exposure to real business outcomes."
        path="/about"
        keywords={["about SYNC", "cross-media measurement company", "single-source measurement", "outcomes optimisation"]}
      />

      {/* 1. HERO */}
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden="true">
          <span className="blog-hero-grid" />
          <span className="blog-hero-orb" />
          <span className="blog-hero-orb blog-hero-orb-2" />
        </div>
        <div className="container">
          <Reveal>
            <span className="eyebrow">About SYNC</span>
            <h1 className="about-hero-title">
              We help brands understand<br />
              <span className="grad">what media really delivers.</span>
            </h1>
            <p className="lead about-hero-lead">
              SYNC is a single-source cross-media measurement and outcomes optimisation company.
              We measure the same people across TV, OTT, YouTube, Meta and digital — and connect
              media exposure to real business outcomes.
            </p>
            <div className="about-hero-cta">
              <Link to="/products" className="btn btn-primary">
                See the Platform <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Book a Demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">The Problem</span>
              <h2>Media has fragmented.<br />Measurement has not kept up.</h2>
              <p style={{ marginTop: 22 }}>
                People move across TV, OTT, YouTube, Meta, commerce platforms, apps and search every day.
              </p>
              <p style={{ marginTop: 12 }}>
                But most reporting still arrives in separate platform silos.
              </p>
            </div>
          </Reveal>

          <div className="problem-grid">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="problem-card">
                  <span className="problem-num">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="tile tile-alt">
        <div className="container">
          <div className="what-grid">
            <Reveal>
              <div>
                <span className="eyebrow">What We Do</span>
                <h2>SYNC connects media exposure to real outcomes.</h2>
                <p style={{ marginTop: 22 }}>
                  SYNC builds systems that show who saw ads, across which screens, how often —
                  and what they did next.
                </p>
                <ul className="what-bullets">
                  {WHAT_WE_DO.map((b) => (
                    <li key={b}>
                      <span className="what-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="what-visual" aria-hidden="true">
                <svg viewBox="0 0 480 360" className="vz">
                  <defs>
                    <linearGradient id="aboutLine" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.0" />
                      <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
                    </linearGradient>
                    <radialGradient id="aboutCore" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--accent)" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
                    </radialGradient>
                  </defs>

                  {/* outer screens */}
                  {[
                    { x: 80, y: 80, label: "TV" },
                    { x: 400, y: 80, label: "OTT" },
                    { x: 60, y: 280, label: "YouTube" },
                    { x: 240, y: 320, label: "Meta" },
                    { x: 420, y: 280, label: "Digital" },
                  ].map((n, i) => (
                    <g key={n.label}>
                      <line x1={n.x} y1={n.y} x2="240" y2="180" stroke="url(#aboutLine)" strokeWidth="1.2" />
                      <circle r="3" fill="var(--accent)">
                        <animateMotion
                          dur={`${3 + i * 0.4}s`}
                          repeatCount="indefinite"
                          path={`M${n.x} ${n.y} L 240 180`}
                        />
                      </circle>
                      <circle cx={n.x} cy={n.y} r="22" fill="var(--bg)" stroke="var(--line-strong)" />
                      <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--fg)">
                        {n.label}
                      </text>
                    </g>
                  ))}

                  {/* central audience node */}
                  <circle cx="240" cy="180" r="44" fill="url(#aboutCore)" />
                  <circle cx="240" cy="180" r="44" fill="none" stroke="var(--accent)" strokeOpacity="0.55">
                    <animate attributeName="r" values="44;58;44" dur="3.2s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.55;0;0.55" dur="3.2s" repeatCount="indefinite" />
                  </circle>
                  <text x="240" y="178" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
                    SAME
                  </text>
                  <text x="240" y="192" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
                    PEOPLE
                  </text>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. DIFFERENTIATION */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Why SYNC</span>
              <h2>Not another dashboard.<br />A clearer way to decide.</h2>
            </div>
          </Reveal>

          <div className="diff-grid">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 90}>
                <article className="diff-card">
                  <span className="diff-icon">
                    <d.icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="tile tile-alt">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">How it works</span>
              <h2>Data → Measurement → Decisions</h2>
            </div>
          </Reveal>

          <div className="step3-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <article className="step3-card">
                  <span className="step3-icon">
                    <s.Icon size={22} strokeWidth={1.6} />
                  </span>
                  <span className="step3-meta">
                    <span className="step3-num">{s.n}</span>
                    <span className="step3-label">{s.label}</span>
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  {i < STEPS.length - 1 && <span className="step3-arrow" aria-hidden="true">→</span>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MISSION */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div className="mission-block">
              <span className="eyebrow">Our Mission</span>
              <h2 className="mission-h2">
                To make media measurement more accurate, transparent and actionable.
              </h2>
              <p className="mission-body">
                Advertising decisions should not rely on partial signals. We aim to give a clear
                view of what media actually delivers.
              </p>
              <p className="mission-vision">
                A world where every media investment is measurable across screens.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. TRUST / PROOF */}
      <section className="tile tile-alt">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Trust</span>
              <h2>Built for serious media decisions.</h2>
            </div>
          </Reveal>

          <div className="trust-grid">
            {TRUST.map((t, i) => (
              <Reveal key={t.title} delay={i * 100}>
                <article className="trust-card">
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="industry-row">
              <span className="industry-label">Industries</span>
              <span className="industry-list">
                FMCG <span className="dot" /> Ecommerce <span className="dot" /> Auto
                <span className="dot" /> Finance <span className="dot" /> Media <span className="dot" /> Apps
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. VALUES */}
      <section className="tile">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Values</span>
              <h2>The principles behind our measurement.</h2>
            </div>
          </Reveal>

          <div className="values-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 80}>
                <article className="value-cell">
                  <span className="value-cell-num">0{i + 1}</span>
                  <h3>{v.name}</h3>
                  <p>{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOUNDER */}
      <section className="tile tile-alt">
        <div className="container">
          <div className="founder-grid">
            <Reveal>
              <div>
                <span className="eyebrow">Founder</span>
                <h2>Built to solve a problem<br />the industry kept working around.</h2>
                <p style={{ marginTop: 22 }}>
                  SYNC was founded by <strong>Anubhav Sharma</strong> with a clear observation:
                  media had become cross-screen, but measurement remained fragmented.
                </p>
                <p style={{ marginTop: 14 }}>
                  Advertisers needed clarity. Agencies needed proof. The industry needed a unified system.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <blockquote className="founder-quote">
                <span className="founder-mark">"</span>
                <p>
                  Measurement should reflect how people actually consume media —
                  across screens, over time, and in real life.
                </p>
                <footer>
                  <strong>Anubhav Sharma</strong>
                  <span>Founder, SYNC</span>
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="tile tile-dark">
        <div className="container">
          <Reveal>
            <div className="story-block">
              <span className="eyebrow" style={{ color: "#409cff" }}>Get started</span>
              <h2>See what your media is really delivering.</h2>
              <p style={{ marginTop: 24 }}>
                Measure the same audience across platforms, de-duplicate reach, and connect
                exposure to real outcomes.
              </p>
              <div style={{ marginTop: 40, display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <Link to="/contact" className="btn btn-primary">Book a Demo</Link>
                <Link to="/products" className="btn btn-secondary" style={{ color: "#f5f5f7", borderColor: "rgba(255,255,255,0.2)" }}>
                  See the Platform
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
