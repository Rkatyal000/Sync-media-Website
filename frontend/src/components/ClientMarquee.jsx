import React from "react";

/**
 * Monochrome, equal-height, slow, smooth infinite client logo strip.
 * - Strict uniform visual height (40px); width is auto (no distortion).
 * - Grayscale + low opacity; hover restores color subtly. No hover-lift.
 * - Two looped rows; single direction each; seamless translateX(-50%).
 * - Logo source fallback chain: Google s2 favicons -> Clearbit -> text.
 */
const CLIENTS = [
  { name: "Havells", domain: "havells.com" },
  { name: "Nestle", domain: "nestle.com" },
  { name: "Kotak Bank", domain: "kotak.com" },
  { name: "HDFC MF", domain: "hdfcfund.com" },
  { name: "Zydus", domain: "zyduslife.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "GRT Jewellers", domain: "grtjewels.com" },
  { name: "Beam Suntory", domain: "beamsuntory.com" },
  { name: "Jockey", domain: "jockey.com" },
  { name: "Yum Brands", domain: "yum.com" },
  { name: "Abbott", domain: "abbott.com" },
  { name: "Lodha", domain: "lodhagroup.com" },
  { name: "ORRA", domain: "orra.co.in" },
  { name: "Viacom 18", domain: "viacom18.com" },
  { name: "Sony Network", domain: "sonypicturesnetworks.com" },
  { name: "Sun Network", domain: "sunnetwork.in" },
  { name: "Zee Network", domain: "zee.com" },
  { name: "Sun Pharma", domain: "sunpharma.com" },
  { name: "Crocs", domain: "crocs.com" },
  { name: "Campus Shoes", domain: "campusshoes.com" },
  { name: "Himalaya Wellness", domain: "himalayawellness.com" },
  { name: "Roca", domain: "roca.com" },
  { name: "Adani", domain: "adani.com" },
  { name: "Ultratech Cement", domain: "ultratechcement.com" },
  { name: "Galderma", domain: "galderma.com" },
  { name: "ICICI Pru MF", domain: "icicipruamc.com" },
  { name: "Versuni", domain: "versuni.com" },
  { name: "DS Group", domain: "dsgroup.com" },
  { name: "Standard Chartered", domain: "sc.com" },
  { name: "Aditya Birla Capital", domain: "adityabirlacapital.com" },
  { name: "Mastercard", domain: "mastercard.com" },
  { name: "ITC Limited", domain: "itcportal.com" },
  { name: "JioHotstar", domain: "hotstar.com" },
  { name: "Unicharm", domain: "unicharm.com" },
  { name: "BCCI", domain: "bcci.tv" },
  { name: "HDFC", domain: "hdfc.com" },
  { name: "Lufthansa", domain: "lufthansa.com" },
  { name: "Asianet", domain: "asianetnews.com" },
  { name: "Franklin Templeton", domain: "franklintempleton.com" },
  { name: "Uniqlo", domain: "uniqlo.com" },
  { name: "KFC", domain: "kfc.com" },
  { name: "California Almonds", domain: "almonds.com" },
  { name: "Vivo", domain: "vivo.com" },
  { name: "Honor", domain: "hihonor.com" },
  { name: "Apple", domain: "apple.com" },
  { name: "Coca-Cola", domain: "coca-cola.com" },
  { name: "Diageo", domain: "diageo.com" },
  { name: "Domino's", domain: "dominos.com" },
  { name: "Joyalukkas", domain: "joyalukkas.com" },
  { name: "LG", domain: "lg.com" },
  { name: "Hero MotoCorp", domain: "heromotocorp.com" },
];

const srcs = (d) => [
  `https://www.google.com/s2/favicons?domain=${d}&sz=128`,
  `https://logo.clearbit.com/${d}?size=128`,
];

function Logo({ c }) {
  const [i, setI] = React.useState(0);
  const list = srcs(c.domain);
  if (i >= list.length) {
    return <span className="mq-logo-text">{c.name}</span>;
  }
  return (
    <img
      src={list[i]}
      alt={c.name}
      title={c.name}
      loading="lazy"
      className="mq-logo-img"
      onError={() => setI((v) => v + 1)}
    />
  );
}

function Row({ items, reverse = false, speed = 90 }) {
  const loop = [...items, ...items];
  return (
    <div
      className={`mq-track ${reverse ? "mq-track--rev" : ""}`}
      style={{ animationDuration: `${speed}s` }}
      data-testid={reverse ? "client-marquee-row-bottom" : "client-marquee-row-top"}
    >
      {loop.map((c, idx) => (
        <div key={`${c.name}-${idx}`} className="mq-logo" data-testid={`client-logo-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
          <Logo c={c} />
        </div>
      ))}
    </div>
  );
}

const TOP = CLIENTS.filter((_, i) => i % 2 === 0);
const BOT = CLIENTS.filter((_, i) => i % 2 === 1);

export default function ClientMarquee({
  eyebrow = "Trusted by category leaders",
  heading = "60+ brands rely on SYNC for cross-media clarity",
}) {
  return (
    <section className="mq-section" data-testid="client-marquee">
      {(eyebrow || heading) && (
        <div className="container mq-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {heading && <h2 className="mq-heading">{heading}</h2>}
        </div>
      )}
      <div className="mq-viewport">
        <Row items={TOP} speed={90} />
        <Row items={BOT} reverse speed={105} />
        <span className="mq-fade mq-fade--l" aria-hidden="true" />
        <span className="mq-fade mq-fade--r" aria-hidden="true" />
      </div>
    </section>
  );
}

export { CLIENTS };
