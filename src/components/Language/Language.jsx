import React from 'react'
import "./Language.css"
import hindi from "../../assets/hindi.png";
import marathi from "../../assets/marathi.png";
import ipo  from "../../assets/ipo.png";
import fund  from "../../assets/fund.png";
import trades from "../../assets/trades.png";

function Language() {
  return (
    <section className="language-section">

      <h1>Finance simplified, in your language</h1>

<button className="watch-btn">
  <span className="youtube-icon">▶</span>
  Watch
</button>

<div className="language-cards">

<img src={hindi} alt="hindi"/>
<img src={marathi} alt="marathi"/>
<img src={ipo} alt="ipo"/>
<img src={fund} alt="fund"/>
<img src={trades} alt="trades"/>

</div>


    </section>
  )
}

export default Language
