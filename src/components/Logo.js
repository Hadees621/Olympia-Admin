import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="/assets/logo.png"
        alt="logo"
        className="w-[80%] align-middle p-4"
      />
    </Link>
  );
};

export default Logo;
