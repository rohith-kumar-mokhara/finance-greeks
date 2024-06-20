import React from "react";
import "./navElement.scss";
import { NavElementType } from "../navbar";
import { useLocation, Link } from "react-router-dom";

type NavElementProps = {
  navElement: NavElementType;
};

const NavElement: React.FC<NavElementProps> = ({ navElement }) => {
  const location = useLocation();

  return (
    <Link
      className={`nav-element ${
        location.pathname === navElement.routeName ? "active" : ""
      }`}
      to={navElement.routeName}
    >
      <div className="text">{navElement.name}</div>
    </Link>
  );
};
export default NavElement;
