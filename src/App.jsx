import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Investment from "./components/Investment/Investment";
import SipSection from "./components/SipSection/SipSections";
import HeroSection from "./components/HeroSection/HeroSections";
import GrowwBanner from "./components/GrowwBanner/GrowwBanner";
import Reviews from "./components/Reviews/Reviews";
import FamilySection from "./components/familySection/FamilySection";
import Language from "./components/Language/Language";
import FooterSection from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Investment />
      <SipSection />
      <HeroSection />
      <Reviews />
      <GrowwBanner />
      <FamilySection/>
      <Language/>
      <FooterSection/>
    </div>
  );
};

export default App;