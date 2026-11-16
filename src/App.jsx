import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Investment from "./components/Investment/Investment";
import SipSection from "./components/SipSection/SipSections";
import HeroSection from "./components/HeroSection/HeroSections";
import GrowwBanner from "./components/GrowwBanner/GrowwBanner";
import Explore from "./components/Explore/Explore";

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Investment />
      <SipSection/>
      <Explore />
      <HeroSection/>
      <GrowwBanner/>
    </div>
  );
};

export default App;

