import React, { useState } from "react";
import './HeroSections.css';

const sidebarItems = [
  "Sort by",
  "Price change",
  "52W performan...",
  "RSI",
  "MACD",
  "Near breakout",
  "Index",
];

const radioOptions = [
  "In last 5 mins",
  "In last 15 mins",
  "In last 1 hour",
  "Today",
];

export default function HeroSection() {
  const [selectedRadio, setSelectedRadio] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);
  const [isMtfEnabled, setIsMtfEnabled] = useState(true);

  return (
    <section className="groww-hero-wrapper">
      <div className="groww-container">
        {/* बायाँ हिस्सा: मुख्य हेडिंग (Sticky) */}
        <div className="left-content animate-entry-left">
          <h1>Stock trading made simple</h1>
          <p>Fast, simple and secure stock trading. All in one app.</p>
        </div>

        {/* दायाँ हिस्सा: तीनों कार्ड्स एक के नीचे एक */}
        <div className="right-content animate-entry-right">
          
          {/* 1. पहला कार्ड: नीला (Intraday) */}
          <div className="card-block">
            <div className="blue-card">
              <div className="phone-frame">
                <div className="phone-top">
                  <span>✕</span>
                  <span>Filters & Sort</span>
                </div>

                <div className="phone-body">
                  <div className="phone-sidebar">
                    {sidebarItems.map((item, idx) => (
                      <div
                        key={idx}
                        className={`sidebar-item ${
                          activeFilter === idx ? "active" : ""
                        }`}
                        onClick={() => setActiveFilter(idx)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="phone-options">
                    {radioOptions.map((option, idx) => (
                      <div
                        key={idx}
                        className="option-row"
                        onClick={() => setSelectedRadio(idx)}
                      >
                        <div
                          className={`radio ${
                            selectedRadio === idx ? "checked" : ""
                          }`}
                        ></div>
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="caption-area">
              <h2>Monitor top Intraday stocks in real time</h2>
              <a href="#intraday">
                Explore Intraday stocks <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* 2. दूसरा कार्ड: पीला-हरा (MTF) */}
          <div className="card-block">
            <div className="lime-card">
              <div className="phone-frame">
                <div className="phone-top">
                  <span>Buy with MTF</span>
                </div>

                <div className="mtf-body">
                  <div className="mtf-badge-circle">4x</div>
                  <div className="mtf-subtitle">Buy in 4x less price</div>

                  <div className="mtf-tabs">
                    <span className="mtf-tab">Delivery</span>
                    <div
                      className={`mtf-toggle-pill ${isMtfEnabled ? "on" : ""}`}
                      onClick={() => setIsMtfEnabled(!isMtfEnabled)}
                    >
                      <span>MTF 4x</span>
                      <div className="toggle-circle"></div>
                    </div>
                  </div>

                  <div className="mtf-row">
                    <span>Qty NSE</span>
                    <div className="mtf-input-box">10</div>
                  </div>

                  <div className="mtf-row">
                    <span>Margin req.</span>
                    <div className="mtf-input-box">₹3,550</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="caption-area">
              <h2>Upto 4x leverage with MTF (Margin Trading Facility)</h2>
              <a href="#mtf">
                Explore MTF stocks <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* 3. तीसरा कार्ड (नया): फ़िरोज़ी/हरा (Pledge) */}
          <div className="card-block">
            <div className="teal-card">
              <div className="phone-frame">
                <div className="phone-top pledge-top">
                  <span>Pledge shares</span>
                </div>

                <div className="pledge-body">
                  <div className="pledge-amount-box">
                    <span className="pledge-label">Margin available</span>
                    <div className="pledge-amount">₹9,30,000</div>
                  </div>

                  <div className="pledge-stock-item">
                    <div>
                      <div className="stock-name">HDFCBANK</div>
                      <div className="stock-qty">150 shares</div>
                    </div>
                    <span className="stock-val">₹2,45,000 ›</span>
                  </div>

                  <div className="pledge-stock-item">
                    <div>
                      <div className="stock-name">RELIANCE</div>
                      <div className="stock-qty">200 shares</div>
                    </div>
                    <span className="stock-val">₹5,80,000 ›</span>
                  </div>

                  <div className="pledge-btn">Pledge for margin</div>
                </div>
              </div>
            </div>

            <div className="caption-area">
              <h2>Pledge: Unlock instant margin from your holdings</h2>
              <a href="#pledge">
                Explore Pledge <span className="arrow">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
