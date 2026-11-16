import React, { useState } from "react";
import "./FamilySection.css";

const FAMILY_ITEMS = [
  {
    id: "915",
    name: "915 by Groww",
    tagline: "Advanced web trading terminal built for active traders.",
    type: "915",
  },
  {
    id: "wealth",
    name: "W (Groww Wealth)",
    tagline: "Personalized wealth management and portfolio advisory.",
    type: "W",
  },
  {
    id: "credit",
    name: "Groww Credit",
    tagline: "Quick and easy instant personal loans and credit services.",
    type: "Credit",
  },
];

export default function FamilySection() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="groww-family-section">
      <div className="groww-family-container">
        <h2 className="groww-family-heading">More from the Groww family</h2>

        <div className="groww-family-grid">
          {FAMILY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`family-card card-${item.id}`}
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setActiveItem(item);
              }}
            >
              
              {item.type === "915" && (
                <svg viewBox="0 0 220 100" className="family-svg-logo">
                  <defs>
                    <linearGradient id="grad915" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E0F7FA" />
                      <stop offset="50%" stopColor="#64D2FF" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                  <text
                    x="50%"
                    y="68%"
                    textAnchor="middle"
                    fill="url(#grad915)"
                    fontSize="74"
                    fontWeight="800"
                    fontStyle="italic"
                    fontFamily="Inter, Arial, sans-serif"
                  >
                    915
                  </text>
                </svg>
              )}

              
              {item.type === "W" && (
                <svg viewBox="0 0 160 110" className="family-svg-logo">
                  <defs>
                    <linearGradient id="gradW" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFF3E0" />
                      <stop offset="55%" stopColor="#F6AD7B" />
                      <stop offset="100%" stopColor="#D97742" />
                    </linearGradient>
                  </defs>
                  <text
                    x="50%"
                    y="75%"
                    textAnchor="middle"
                    fill="url(#gradW)"
                    fontSize="86"
                    fontWeight="800"
                    fontFamily="Inter, Arial, sans-serif"
                  >
                    W
                  </text>
                </svg>
              )}

              {/* कार्ड 3: Groww Credit */}
              {item.type === "Credit" && (
                <div className="logo-credit">
                  <div className="credit-circle-icon">
                    <div className="credit-wave" />
                  </div>
                  <span className="credit-text">Credit</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          className="family-modal-overlay"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="family-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="family-modal-header">
              <span className="family-badge">Groww Ecosystem</span>
              <button
                type="button"
                className="family-close-btn"
                onClick={() => setActiveItem(null)}
              >
                ✕
              </button>
            </div>
            <h3 className="family-modal-title">{activeItem.name}</h3>
            <p className="family-modal-desc">{activeItem.tagline}</p>
            <button
              type="button"
              className="family-explore-btn"
              onClick={() => setActiveItem(null)}
            >
              Explore Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
