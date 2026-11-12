import React, { useState } from 'react';
import './sipSections.css';

const SipSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('sip');

  return (
    <div className="sip-grid-container">
    
      <div className="sip-header">
        <h1 className="sip-heading">Build wealth, SIP by SIP</h1>
        <p className="sip-subtext">Invest in direct mutual funds </p>
        <button className="start-sip-btn">Invest Now</button>
      </div>

      
      <div className="connector-lines">
        <div className="vertical-line"></div>
        <div className="horizontal-line"></div>
      </div>

      
      <div className="cards-grid">
      
        <div className="fund-card side-card"></div>

       
        <div className="fund-card center-card">
          <div className="card-icon icici-icon">🔷</div>
          <h4>India hybrid fund</h4>
          <p className="fund-category">Equity • Large Cap • 5★</p>
          <div className="fund-return">
            18.32% <span>3Y Annualised</span>
          </div>
          <a href="#explore" className="explore-link">Explore →</a>
        </div>

       
        <div className="fund-card side-card"></div>
      </div>

   
      <div className="chart-line-box">
       
      </div>

   
      <div className="bottom-controls">
        <button
          className={`control-pill ${selectedPeriod === 'sip' ? 'active' : ''}`}
          onClick={() => setSelectedPeriod('sip')}
        >
          one-time
        </button>
        <button
          className={`control-pill ${selectedPeriod === 'lumpsum' ? 'active' : ''}`}
          onClick={() => setSelectedPeriod('lumpsum')}
        >
          Start SIP
        </button>
      </div>
    </div>
  );
};

export default SipSection;
