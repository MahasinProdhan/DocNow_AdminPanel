import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 mt-4 bg-white border-b-2 sm:px-10 sm:pb-4">
      <div className="flex items-center justify-center gap-4 ">
        <img
          className="cursor-pointer w-36 sm:w-40"
          src={assets.admin_logo}
          alt=""
          srcset=""
        />
        <p className="px-2 py-1 text-xs border border-gray-500 rounded-full cursor-pointer sm:px-4 ">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        className="px-6 py-1 text-xs text-white border rounded-full bg-primary sm:px-10 sm:py-2"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
