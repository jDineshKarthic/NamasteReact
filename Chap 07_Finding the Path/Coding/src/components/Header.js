import { useState } from 'react';
import { Link } from 'react-router-dom';
// Header component for header section: Logo, Nav Items
import FoodLogo from '/images/FoodLogo.png';

const Title = () => (
  <a href="/">
    <img className="logo" src={FoodLogo} alt="Food Logo" />
  </a>
);

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
          <li>
            {' '}
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
