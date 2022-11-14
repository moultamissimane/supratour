// import { Link } from "@mui/material";
import { Link } from "react-router-dom"
import React from "react";
import Logo from "../assets/Logo.png"
// import { useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();

  return (
    <div className="w-screen h-full relative">
      <div className="bg-[#174C4F] ">
        <div className="flex justify-between py-2 px-4">
          <div className="flex items-center ">
            <img src={Logo} alt="Logo" height={20} width={72} />
            <h2 className="font-bold text-lg text-white">Supr@tours</h2>
          </div>
          <div className="flex justify-between gap-4">
            <Link to="/Login">
              <div className="bg-black rounded-md px-3 py-1">
                <button className="text-white font-bold text-lg px-3 py-2">
                  Login
                </button>
              </div>
            </Link>
            <Link to="/Register">
            <div className="bg-black rounded-md px-3 py-1">
              <button className="text-white font-bold text-lg px-3 py-2">
                Register
              </button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
