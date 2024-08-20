import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ width = "w-[80%]" }) => {
  return (
    <Link to="/home">
      <img
        src="/assets/logo.png"
        alt="logo"
        className={`${width} align-middle p-4`}
      />
    </Link>
  );
};

export default Logo;
