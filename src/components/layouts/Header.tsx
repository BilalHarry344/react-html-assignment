import { FC } from "react";
import { Link } from "react-router-dom";
// images
import LogoImg from "../../assets/img/logo.png";

const Header: FC = () => {
  return (
    <nav className="navbar display-flex container-wrapper">
      <input type="checkbox" id="nav-check" />

      <Link to="/">
        <img src={LogoImg} alt="logo" />
      </Link>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/about">About us</Link>
        <Link to="/products">Products</Link>
        <Link to="/career">Careers</Link>

        <Link to="tel:+1888888888" className="button-component button-primary">
          Contact us
        </Link>
      </div>
    </nav>
  );
};

export default Header;
