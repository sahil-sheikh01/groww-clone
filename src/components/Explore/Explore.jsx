import './Explore.css'
import myImage from '../../assets/img-frame-1.webp'
import myImage2 from '../../assets/img-frame-2.webp'
import myImage3 from '../../assets/img-frame-3.webp'
import myImage4 from'../../assets/img-frame-4.webp'
import { useEffect, useRef, useState } from 'react'

const slidesData = [
  {
    id: 0,
    text: 'Track charts, positions, and trade in a customisable layout',
    btnText: 'Explore Terminal',
    image: myImage,
    glowClass: 'fo-green-glow',
  },
  {
    id: 1,
    text: 'Analyse Chains, view payoffs, create baskets',
    btnText: 'Try Option Chain',
    image: myImage2,
    glowClass: 'fo-blue-glow',
  },
  {
    id: 2,
    text: 'One-tap trade with Scalper mode on mobile',
    btnText: 'Explore Scalper mode',
    image: myImage3,
    glowClass: 'fo-green-glow',
  },
  {
    id: 3,
    text: 'Trade commodities & futures seamlessly across devices',
    btnText: 'Explore Commodities',
    image: myImage4,
    glowClass: 'fo-gold-glow',
  },
];

const Explore = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      const currentScroll = -rect.top;

      let progress = currentScroll / totalScroll;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      if (progress < 0.25) {
        setActiveSlide(0);
      } else if (progress < 0.50) {
        setActiveSlide(1);
      } else if (progress < 0.75) {
        setActiveSlide(2);
      } else {
        setActiveSlide(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="fo-scroll-wrapper">
      <div className="fo-heading-wrapper">
        <h1 className="fo-main-heading">Trade Futures & Options like a pro</h1>
      </div>

      <div className="fo-sticky-container">
        <div className="fo-content-layout">
          
          <div className="fo-text-scroll-window">
            <div
              className="fo-text-mover"
              style={{
                transform: `translateY(-${scrollProgress * 75}%)`,
              }}
            >
              {slidesData.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`fo-text-slide ${
                    activeSlide === index ? 'active-text' : 'inactive-text'
                  }`}
                >
                  <p>{slide.text}</p>
                  <button className="fo-explore-btn">
                    {slide.btnText} <span>&gt;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="fo-image-container">
            {slidesData.map((slide, index) => (
              <div
                key={slide.id}
                className={`fo-image-box ${
                  activeSlide === index ? 'show' : 'hide'
                }`}
              >
                <div className={slide.glowClass}></div>
                <img
                  src={slide.image}
                  alt={slide.text}
                  className="fo-main-img"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Explore;
