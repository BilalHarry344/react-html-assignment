import { FC } from "react";

import LogoImg from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="container-wrapper footer navbar display-flex">
      <Link to="/">
        <img src={LogoImg} alt="logo" />
      </Link>

      <div className="nav-links">
        <Link to="/about">About us</Link>
        <Link to="/products">Products</Link>
        <Link to="/career">Careers</Link>

        <Link to="tel:+1888888888" className="button-component button-primary">
          Contact us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
