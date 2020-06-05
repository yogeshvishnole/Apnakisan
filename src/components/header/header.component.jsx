import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="navLogo">
          <img src="/images/logo.png" />
        </div>
        <div className="navItem home">Home</div>
        <div className="navItem">Products</div>
        <div className="navItem">About us</div>
        <div className="navItem">Contact us</div>
        <div className="navItem">Career</div>
      </div>
    </div>
  );
};

export default Header;
