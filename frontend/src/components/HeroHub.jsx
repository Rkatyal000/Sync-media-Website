import React from "react";

/**
 * HeroHub — a clean circular system diagram.
 * Center: SYNC.  Around it: TV · OTT / CTV · YouTube · Mobile · Commerce · Digital.
 * Thin lines only. No gradients. No glow.
 */
const NODES = [
  { label: "TV",        angle: -90  },
  { label: "OTT / CTV", angle: -30  },
  { label: "YouTube",   angle:  30  },
  { label: "Mobile",    angle:  90  },
  { label: "Commerce",  angle: 150  },
  { label: "Digital",   angle: 210  },
];

const CX = 220;
const CY = 220;
const R  = 150;   // orbit radius

function polar(angleDeg, radius) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(a), y: CY + radius * Math.sin(a) };
}

export default function HeroHub() {
  return (
    <svg
      viewBox="0 0 440 440"
      className="hero-hub"
      role="img"
      aria-label="SYNC at the center of TV, OTT/CTV, YouTube, Mobile, Commerce and Digital"
    >
      {/* Orbit ring (single thin) */}
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      {/* Spokes + nodes */}
      {NODES.map((n) => {
        const p = polar(n.angle, R);
        return (
          <g key={n.label}>
            <line
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="var(--accent)"
              strokeOpacity="0.25"
              strokeWidth="1"
            />
            <circle
              cx={p.x}
              cy={p.y}
              r="32"
              fill="var(--bg)"
              stroke="var(--accent)"
              strokeOpacity="0.55"
              strokeWidth="1"
            />
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill="var(--fg)"
              letterSpacing="0.02em"
            >
              {n.label}
            </text>
          </g>
        );
      })}

      {/* Center node */}
      <circle
        cx={CX}
        cy={CY}
        r="44"
        fill="var(--bg)"
        stroke="var(--accent)"
        strokeWidth="1.25"
      />
      <text
        x={CX}
        y={CY + 5}
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fill="var(--fg)"
        letterSpacing="0.12em"
      >
        SYNC
      </text>
    </svg>
  );
}
