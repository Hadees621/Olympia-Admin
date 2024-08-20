import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-3xl m-2 shadow-lg py-2 font-bold bg-red-500 hover:bg-red-600 text-white hover:border-none border-[#f1eded] text-[14px]"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
