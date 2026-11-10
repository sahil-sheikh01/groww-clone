import React from 'react';
import "./Investment.css";
import logo from '../../groww-clone.png';

function Investment() {
  return (
    <div className="investment-page-wrapper">
  
      <div className="platform-heading">
        <h2>India's #1</h2>
        <h2>Investing platform</h2>
        <p>Trusted by 2 Cr+ active investors</p>

        <div className="investment-section">
          <h1>India's stock market at your fingertips</h1>
        </div>
      </div>

      <div className="market-cards">
        
        <div className="left-cards">
          
        
          <div className="outer-card">
            <h2 className="stocks-outer-title">Stocks</h2>
            <div className="phone-screen">
              <div className="card-top-row">
                <img src={logo} alt="Groww Logo" className="stock-logo" />
              </div>

              <h2 className="stock-price">₹792.52</h2>
              <span className="stock-change">+15.95 (2.24%)</span>

              <div className="stock-graph">
                <svg viewBox="0 0 500 220">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00b386" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#00b386" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 30 210 L 30 180 Q 45 150 55 170 L 65 145 Q 75 120 85 155 L 100 130 Q 115 105 125 145 L 140 170 Q 155 190 175 165 L 195 150 Q 210 140 220 110 L 235 45 Q 245 20 255 65 Q 270 105 280 55 L 290 25 L 290 210 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M 30 180 Q 45 150 55 170 L 65 145 Q 75 120 85 155 L 100 130 Q 115 105 125 145 L 140 170 Q 155 190 175 165 L 195 150 Q 210 140 220 110 L 235 45 Q 245 20 255 65 Q 270 105 280 55 L 290 25"
                    fill="none"
                    stroke="#00a6a6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="290" cy="25" r="5" fill="#00a6a6" />
                </svg>

                <div className="chart-filters">
                  <button className="active">1D</button>
                  <button>1W</button>
                  <button>1M</button>
                  <button>1Y</button>
                  <button>5Y</button>
                  <button>ALL</button>
                </div>
              </div>
            </div>
          </div>



          <div className="bonds-card">
            <div className="bonds-content">
              <div className="bonds-text">
                <h2>Bonds</h2>
                <p className="bonds-subtitle">Earn fixed interest with regular payouts</p>
              </div>
              
            </div>
          </div>

        </div>



        <div className="right-cards">
          
       
          <div className="etf-card">
            <h2>ETFs</h2>
            <p className="etf-subtitle">Gold , Silver , International & Index ETFs</p>

            <div className="etf-items">
              <div className="etf-item">
                <img src="https://resources.groww.in/web-assets/story_assets/landing-page/home_page/gold_funds.svg" alt="Gold" />
                <p>Gold</p>
              </div>

              <div className="etf-item">
                <img src="https://resources.groww.in/web-assets/story_assets/landing-page/home_page/silver_funds.svg" alt="Silver" />
                <p>Silver</p>
              </div>

              <div className="etf-item">
                <img src="https://resources.groww.in/web-assets/story_assets/landing-page/home_page/international_funds.svg" alt="Global" />
                <p>Global</p>
              </div>

              <div className="etf-item">
                <img src="https://resources.groww.in/web-assets/story_assets/landing-page/home_page/index_funds.svg" alt="Index" />
                <p>Index</p>
              </div>
            </div>
          </div>

      

          <div className="ipo-card">
            <h2>IPOs</h2>

            <div className="ipo-mobile-frame">
              <div className="ipo-tabs">
                <span className="ipo-tab active">Open (4)</span>
                <span className="ipo-tab">Applied</span>
                <span className="ipo-tab">Closed</span>
                <span className="ipo-tab">Upcoming</span>
              </div>

              <div className="ipo-type-filter">
                <span className="ipo-type-label">IPO type:</span>
                <span className="ipo-type-value">All</span>
              </div>

              <div className="ipo-list">
                <div className="ipo-item">
                  <div className="ipo-left">
                    <img src="https://resources.groww.in/web-assets/story_assets/landing-page/home_page/gold_funds.svg" alt="Aravalli" className="ipo-img-icon" />
                    <div className="ipo-info">
                      <h4>Aravalli Healthtech</h4>
                      <p>Last day • SME</p>
                    </div>
                  </div>
                  <button className="ipo-action-btn">Apply</button>
                </div>

                <div className="ipo-item">
                  <div className="ipo-left">
                    <img src="https://resources.groww.in/web-assets/story_assets/landing-page/home_page/silver_funds.svg" alt="Satpura" className="ipo-img-icon" />
                    <div className="ipo-info">
                      <h4>Satpura Ltd</h4>
                      <p>Closes in 24 hrs</p>
                    </div>
                  </div>
                  <button className="ipo-action-btn">Apply</button>
                </div>

                <div className="ipo-item">
                  <div className="ipo-left">
                    <img src="https://resources.groww.in/web-assets/story_assets/landing-page/home_page/international_funds.svg" alt="Eastern Ghats" className="ipo-img-icon" />
                    <div className="ipo-info">
                      <h4>Eastern Ghats Infra</h4>
                      <p>Closes in 2 days</p>
                    </div>
                  </div>
                  <button className="ipo-action-btn">Apply</button>
                </div>

                <div className="ipo-item">
                  <div className="ipo-left">
                    <img src="https://resources.groww.in/web-assets/story_assets/landing-page/home_page/index_funds.svg" alt="Himalaya" className="ipo-img-icon" />
                    <div className="ipo-info">
                      <h4>Himalaya Industries</h4>
                      <p>Closes in 3 days</p>
                    </div>
                  </div>
                  <button className="ipo-action-btn pre-apply-btn">Pre-apply</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Investment;