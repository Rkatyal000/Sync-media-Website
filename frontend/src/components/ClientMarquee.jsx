import React, { useState } from "react";

/**
 * Floating client logo wall.
 *
 * - Two infinite marquee rows scrolling in opposite directions (70s & 85s).
 * - Each chip pairs the real brand logo (36px rounded badge) with a wordmark
 *   so the row reads cleanly even before logos finish loading.
 * - Logo source fallback chain: Google s2 favicons -> Clearbit -> initial chip.
 * - Hover pauses the marquee; individual chips lift with an accent shadow.
 * - Edge-fade masks for the cinematic "Apple" fade.
 */
const CLIENTS = [
  { name: "Havells",                domain: "havells.com" },
  { name: "Nestle",                 domain: "nestle.com" },
  { name: "Kotak Bank",             domain: "kotak.com" },
  { name: "HDFC MF",                domain: "hdfcfund.com" },
  { name: "Zydus",                  domain: "zyduslife.com" },
  { name: "Amazon",                 domain: "amazon.com" },
  { name: "GRT Jewellers",          domain: "grtjewels.com" },
  { name: "Beam Suntory",           domain: "beamsuntory.com" },
  { name: "Jockey",                 domain: "jockey.com" },
  { name: "Yum Brands",             domain: "yum.com" },
  { name: "Abbott",                 domain: "abbott.com" },
  { name: "Lodha",                  domain: "lodhagroup.com" },
  { name: "ORRA",                   domain: "orra.co.in" },
  { name: "Viacom 18",              domain: "viacom18.com" },
  { name: "Sony Network",           domain: "sonypicturesnetworks.com" },
  { name: "Sun Network",            domain: "sunnetwork.in" },
  { name: "Zee Network",            domain: "zee.com" },
  { name: "Sun Pharma",             domain: "sunpharma.com" },
  { name: "Crocs",                  domain: "crocs.com" },
  { name: "Campus Shoes",           domain: "campusshoes.com" },
  { name: "Himalaya Wellness",      domain: "himalayawellness.com" },
  { name: "Roca",                   domain: "roca.com" },
  { name: "Adani",                  domain: "adani.com" },
  { name: "Ultratech Cement",       domain: "ultratechcement.com" },
  { name: "Galderma",               domain: "galderma.com" },
  { name: "ICICI Pru MF",           domain: "icicipruamc.com" },
  { name: "Versuni",                domain: "versuni.com" },
  { name: "DS Group",               domain: "dsgroup.com" },
  { name: "Standard Chartered",     domain: "sc.com" },
  { name: "Aditya Birla Capital",   domain: "adityabirlacapital.com" },
  { name: "Mastercard",             domain: "mastercard.com" },
  { name: "ITC Limited",            domain: "itcportal.com" },
  { name: "JioHotstar",             domain: "hotstar.com" },
  { name: "Unicharm",               domain: "unicharm.com" },
  { name: "BCCI",                   domain: "bcci.tv" },
  { name: "HDFC",                   domain: "hdfc.com" },
  { name: "Lufthansa",              domain: "lufthansa.com" },
  { name: "Asianet",                domain: "asianetnews.com" },
  { name: "Franklin Templeton",     domain: "franklintempleton.com" },
  { name: "Uniqlo",                 domain: "uniqlo.com" },
  { name: "KFC",                    domain: "kfc.com" },
  { name: "California Almonds",     domain: "almonds.com" },
  { name: "Vivo",                   domain: "vivo.com" },
  { name: "Honor",                  domain: "hihonor.com" },
  { name: "Apple",                  domain: "apple.com" },
  { name: "Coca-Cola",              domain: "coca-cola.com" },
  { name: "Diageo",                 domain: "diageo.com" },
  { name: "Domino's",               domain: "dominos.com" },
  { name: "Joyalukkas",             domain: "joyalukkas.com" },
  { name: "LG",                     domain: "lg.com" },
  { name: "Hero MotoCorp",          domain: "heromotocorp.com" },
];

// Logo source chain: Google s2 (most reliable) -> Clearbit -> text fallback.
const logoSources = (domain) => [
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  `https://logo.clearbit.com/${domain}?size=128`,
];

// Split into 2 rows for the two opposing-direction marquees.
const ROW_TOP    = CLIENTS.filter((_, i) => i % 2 === 0);
const ROW_BOTTOM = CLIENTS.filter((_, i) => i % 2 === 1);

function LogoBadge({ name, domain }) {
  const sources = logoSources(domain);
  const [idx, setIdx] = useState(0);
  const failed = idx >= sources.length;

  if (failed) {
    return (
      <span className="mq-chip-badge mq-chip-badge--text" aria-hidden="true">
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <span className="mq-chip-badge" aria-hidden="true">
      <img
        src={sources[idx]}
        alt=""
        loading="lazy"
        className="mq-chip-img"
        onError={() => setIdx((i) => i + 1)}
      />
    </span>
  );
}

function MarqueeRow({ items, reverse = false, speed = 70 }) {
  // Duplicate the list so the translate(-50%) loop is seamless.
  const loop = [...items, ...items];
  return (
    <div
      className={`mq-track ${reverse ? "mq-track--rev" : ""}`}
      style={{ animationDuration: `${speed}s` }}
      data-testid={reverse ? "client-marquee-row-bottom" : "client-marquee-row-top"}
    >
      {loop.map((c, i) => (
        <div
          key={`${c.name}-${i}`}
          className="mq-chip"
          title={c.name}
          data-testid={`client-chip-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        >
          <LogoBadge name={c.name} domain={c.domain} />
          <span className="mq-chip-name">{c.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function ClientMarquee({
  eyebrow = "Trusted by category leaders",
  heading = "60+ brands rely on SYNC for cross-media clarity",
  variant = "default",
}) {
  return (
    <section
      className={`mq-section mq-${variant} mq-rich`}
      data-testid="client-marquee"
    >
      {(eyebrow || heading) && (
        <div className="container mq-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {heading && <h2 className="mq-heading">{heading}</h2>}
        </div>
      )}
      <div className="mq-viewport mq-viewport--rich">
        <MarqueeRow items={ROW_TOP} speed={70} />
        <MarqueeRow items={ROW_BOTTOM} reverse speed={85} />
        <span className="mq-fade mq-fade--l" aria-hidden="true" />
        <span className="mq-fade mq-fade--r" aria-hidden="true" />
      </div>
    </section>
  );
}

export { CLIENTS };
