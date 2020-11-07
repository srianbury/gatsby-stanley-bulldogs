import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Navbar.Brand>
      <Link to="/" className="text-light">
        {siteTitle}
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" />
      <Nav>
        <NavItem to="/" title="Home" />
        <NavItem to="/our-dogs" title="Our Dogs" />
        <NavItem to="/litters" title="Litters" />
        <NavItem to="/contact" title="Contact" />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const NavItem = ({ to, title }) => (
  <Nav.Link>
    <Link to={to} className="text-light">
      {title}
    </Link>
  </Nav.Link>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
