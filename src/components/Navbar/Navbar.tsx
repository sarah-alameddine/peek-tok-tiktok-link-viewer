import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <i className="fab fa-tiktok fa-2x main-wrapper">PeakTok</i>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;