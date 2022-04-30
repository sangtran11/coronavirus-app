import React from "react";
import coronaJPG from "../../images/corona-text.png"

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-dark px-3">
      <span className="navbar-brand">
        <img src={coronaJPG} width="50%" height="50px" alt="" />
      </span>
    </nav>
  )
};

export default Header;
