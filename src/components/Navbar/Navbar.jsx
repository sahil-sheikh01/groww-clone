import "./Navbar.css";
import groww_logo from '../../assets/groww_logo.webp'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={groww_logo} alt="Groww" />
        </div>

        <div className="nav-links">
          <a href="#">Stocks</a>
          <a href="#">F&O</a>
          <a href="#">Mutual Funds</a>
          <a href="#">More</a>
        </div>
      </div>

      <div className="navbar-right">
        <input className="search" type="text" placeholder="Search Groww..." />
        <button className="signup-btn">Login/Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
