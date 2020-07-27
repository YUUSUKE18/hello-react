import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="h-16 bg-green-400 text-white">
    <div className="flex justify-between items-center w-full h-full px-8 max-w-screen-xl">
      <h1 className="text-2xl font-semibold font-rubik">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav>
        <ul className="text-lg font-thin">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
