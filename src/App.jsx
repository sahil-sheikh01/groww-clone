import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Investment from "./components/Investment/Investment";
import MutualFunds from "./components/MutualFunds/MutualFunds";
import Explore from "./components/Explore/Explore";
import StockTrading from "./components/StockTrading/StockTrading";
import Reviews from "./components/Reviews/Reviews";
import GrowwBanner from "./components/GrowwBanner/GrowwBanner";
import GrowwFamily from "./components/GrowwFamily/GrowwFamily";
import Language from "./components/Language/Language";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Investment />
      <MutualFunds />
      <Explore/>
      <StockTrading />
      <Reviews />
      <GrowwBanner />
      <GrowwFamily/>
      <Language/>
      <Footer/>
    </div>
  );
};

export default App;