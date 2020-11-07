import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="d-flex justify-content-between pl-4 pr-4 pt-1 pb-1 bg-dark">
    <div>
      <Link to="/" className="text-light">
        <h3>{siteTitle}</h3>
      </Link>
    </div>
    <div className="d-flex flex-wrap align-content-center">
      <ul className="nav justify-content-center">
        <NavItem title="Home" to="/" />
        <NavItem title="Our Dogs" to="/our-dogs" />
        <NavItem title="Litters" to="/litters" />
        <NavItem title="Contact" to="/contact" />
      </ul>
    </div>
  </header>
);

const NavItem = ({ to, title }) => (
  <li className="nav-item ml-2 d-flex flex-wrap align-content-center">
    <Link to={to}>
      <h5 className="m-0 text-light">{title}</h5>
    </Link>
    }
  </li>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
