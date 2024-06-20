import React, { useState } from "react";
import "./navbar.scss";
import { useLocation, useNavigate } from "react-router-dom";
import NavElement from "./navElement/navElement";

type NavbarProps = {};

export type NavElementType = {
  name: string;
  icon?: string;
  routeName: string;
};

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navElements: NavElementType[] = [
    {
      name: "Home",
      routeName: "/",
    },
    {
      name: "Calculator",
      routeName: "/calculator",
    },
    {
      name: "News",
      routeName: "/news",
    },
  ];

  const authPages = ['/login', '/signUp', '/otp', '/forgotPass']

  return (
    <div
      className={`navbar ${
        authPages.includes(location.pathname)
          ? "disabled"
          : ""
      }`}
    >
      <div className="left">
        <div>logo</div>
      </div>
      <div className="mid">
        {navElements.map((navElement) => (
          <NavElement navElement={navElement} key={navElement.name}/>
        ))}
      </div>
      <div className="right">
        {isLoggedIn ? (
          <div className="profile-button"></div>
        ) : (
          <div className="auth-buttons">
            <div
              className={`auth-button ${
                location.pathname === "/login" ? "active" : ""
              }`}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </div>
            /
            <div
              className={`auth-button ${
                location.pathname === "/signUp" ? "active" : ""
              }`}
              onClick={() => {
                navigate("/signUp");
              }}
            >
              Sign Up
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
