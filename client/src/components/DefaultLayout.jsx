import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import Face4Icon from "@mui/icons-material/Face4";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.users);
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Bookings",
      path: "/bookings",
      icon: <LibraryBooksIcon />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <Face4Icon />,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <LogoutIcon />,
    },
  ];
  const adminMenu = [
    {
      name: "Home",
      path: "/admin",
      icon: <HomeIcon />,
    },
    {
      name: "Buses",
      path: "/admin/buses",
      icon: <DirectionsBusIcon />,
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: <LibraryBooksIcon />,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <LogoutIcon />,
    },
  ];
  const menutoBeRendered = user?.isAdmin ? adminMenu : userMenu;
  const activeRoute = window.location.pathname;
  return (
    <div
      className="layout-parent flex w-full  h-screen gap-[20px]"
      style={{ fontFamily: "quicksand" }}
    >
      <div className="sidebar bg-pink-400 h-screen flex flex-col justify-start px-5 py-0  ">
        <div className="sidebar-header">
          <h1 className="text-white text-2xl mb-0 p-2 text-center font-bold">
            Supra
            <span className="text-yellow-300">@</span>
            Tours
          </h1>
          <h1 className="role text-white text-[16px] mb-0 p-0 text-center font-semibold text-lg">
            Welcome {user?.name} <br />
            {/* {user?.isAdmin ? "Admin" : "User"} */}
          </h1>
        </div>
        <div className="flex flex-col gap-5 justify-start mt-[150px] ">
          {menutoBeRendered.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  activeRoute === item.path &&
                  "border-l-4 border-pink-600 rounded-lg bg-pink-800"
                } " text-[20px] gap-10 mr-[10px] text-white flex items-center hover:bg-pink-800 hover:rounded-lg duration-200 justify-start py-[5px] px-[15px] w-full cursor-pointer transition-[0.2s]"`}
              >
                <span>{item.icon}</span>
                {!collapsed && (
                  <span
                    onClick={() => {
                      if (item.path === "/logout") {
                        localStorage.removeItem("token");
                        navigate("/login");
                      } else {
                        navigate(item.path);
                      }
                    }}
                  >
                    {item.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="body w-full">
        <div className="header shadow-lg w-full p-5  ">
          {collapsed ? (
            <MenuIcon
              className="cursor-pointer text-[30px]"
              onClick={() => {
                setCollapsed(false);
              }}
            />
          ) : (
            <CloseIcon
              className="cursor-pointer text-[30px]"
              onClick={() => {
                setCollapsed(true);
              }}
            />
          )}
        </div>
        <div className="content p-[10px]">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
