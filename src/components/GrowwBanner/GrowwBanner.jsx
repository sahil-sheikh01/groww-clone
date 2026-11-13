import React from 'react'
import "./GrowwBanner.css"
import bannerImage from "../../assets/groww-banner.png";

function GrowwBanner() {
  return (

   <section className="groww-banner">

<div className="banner-content">


<div className="banner-logo">
<img src={bannerImage} alt="Groww-Banner"/>
</div>

<h1>
No account opening charges, no barriers.
<br/>
Just Groww
</h1>

<button>Start now</button>


</div>

   </section>
      

  )
}

export default GrowwBanner


