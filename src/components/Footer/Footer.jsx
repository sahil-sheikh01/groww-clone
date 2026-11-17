import React from "react";
import './Footer.css';

const TICKER_STOCKS = [
  { name: "TCS", price: "3,412.50", change: "+0.82%" },
  { name: "ICICIBANK", price: "1,294.10", change: "+0.45%" },
  { name: "INFY", price: "1,865.40", change: "+1.15%" },
  { name: "SBIN", price: "838.90", change: "+0.64%" },
  { name: "HINDUNILVR", price: "2,490.25", change: "+0.28%" },
  { name: "RELIANCE", price: "1,288.70", change: "+1.05%" },
  { name: "HDFCBANK", price: "1,745.00", change: "+0.42%" },
  { name: "BHARTIARTL", price: "1,652.80", change: "+1.31%" },
];

const GROWW_LINKS = [
  "About Us",
  "Pricing",
  "Blog",
  "Media & Press",
  "Careers",
  "Help & Support",
  "Trust & Safety",
  "Investor Relations",
];

const PRODUCTS_LEFT = [
  "Stocks",
  "F&O",
  "MTF",
  "ETF",
  "IPO",
  "Mutual Funds",
  "Commodities",
  "Groww Terminal",
];

const PRODUCTS_RIGHT = [
  "915 Terminal",
  "Stocks Screener",
  "Algo Trading",
  "Groww Digest",
  "Demat Account",
  "Groww AMC",
  "Groww Pay",
  "Credit",
];

const QUICK_LINKS = ["AMC Mutual Funds", "Calculators", "Glossary"];

export default function FooterSection() {
  const tickerList = [...TICKER_STOCKS, ...TICKER_STOCKS];

  return (
    <footer className="groww-footer-wrapper">
   
      <div className="footer-ticker-strip">
        <div className="footer-ticker-track">
          {tickerList.map((stock, idx) => (
            <div key={idx} className="ticker-item">
              <span className="ticker-name">{stock.name}</span>
              <span className="ticker-price">{stock.price}</span>
              <span className="ticker-blue-pct">{stock.change}</span>
            </div>
          ))}
        </div>
      </div>

 
      <div className="groww-footer-main">
        <div className="footer-container">
          <div className="footer-grid">
         
            <div className="footer-brand-col">
              <div className="footer-logo-row">
                <div className="footer-logo-circle">
                  <div className="footer-logo-wave" />
                </div>
                <span className="footer-brand-text">Groww</span>
              </div>

              <address className="footer-address">
                Vaishnavi Tech Park, South Tower, 3rd Floor
                <br />
                Sarjapur Main Road, Bellandur, Bengaluru - 560103
                <br />
                Karnataka
              </address>

              <a href="#contact" className="footer-contact-link">
                Contact Us
              </a>

         
              <div className="footer-social-row">
                <a href="#x" aria-label="X" className="social-pill">
                  <svg viewBox="0 0 24 24" className="social-svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#insta" aria-label="Instagram" className="social-pill">
                  <svg viewBox="0 0 24 24" className="social-svg">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                </a>
                <a href="#fb" aria-label="Facebook" className="social-pill">
                  <svg viewBox="0 0 24 24" className="social-svg">
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                  </svg>
                </a>
                <a href="#in" aria-label="LinkedIn" className="social-pill">
                  <svg viewBox="0 0 24 24" className="social-svg">
                    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                  </svg>
                </a>
                <a href="#yt" aria-label="YouTube" className="social-pill">
                  <svg viewBox="0 0 24 24" className="social-svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>

       
              <div className="footer-download-box">
                <p className="footer-download-heading">Download the App</p>
                <div className="footer-store-icons">
                  <a href="#apple" aria-label="App Store" className="store-btn">
                    <svg viewBox="0 0 24 24" className="store-svg">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3z" />
                    </svg>
                  </a>
                  <a href="#play" aria-label="Google Play" className="store-btn">
                    <svg viewBox="0 0 24 24" className="store-svg">
                      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* दूसरा कॉलम: GROWW */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">GROWW</h4>
              <ul className="footer-list">
                {GROWW_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

       
            <div className="footer-products-col">
              <h4 className="footer-col-title">PRODUCTS</h4>
              <div className="footer-products-split">
                <ul className="footer-list">
                  {PRODUCTS_LEFT.map((link) => (
                    <li key={link}>
                      <a href="#link">{link}</a>
                    </li>
                  ))}
                </ul>
                <ul className="footer-list">
                  {PRODUCTS_RIGHT.map((link) => (
                    <li key={link}>
                      <a href="#link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

   
            <div className="footer-links-col">
              <h4 className="footer-col-title">QUICK LINKS</h4>
              <ul className="footer-list">
                {QUICK_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
