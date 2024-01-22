import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/admin/sidebar.css";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  return (
    <>
      <aside id="sidebar" className={isOpen ? "" : "hide"}>
        <NavLink to="/dashboard" className="brand">
          {/* <i className="fa-solid fa-a fa-xl"></i> */}
          <i className="fa-solid fa-heart-pulse fa-xl"></i>
          {/* <i className="fa-solid fa-k fa-xl"></i> */}
          <span className="text"></span>
        </NavLink>
        <ul className="side-menu top">
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <NavLink to="/dashboard">
              <i className="fa fa-brands fa-slack "></i>
              <span className="text">Dashboard</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/category" ? "active" : ""}>
            <NavLink to="/category">
              <i className="fa fa-solid fa-cart-shopping"></i>
              <span className="text">Category</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/product" ? "active" : ""}>
            <NavLink to="/product">
              <i className="fa fa-brands fa-product-hunt"></i>
              <span className="text">Product</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/admin" ? "active" : ""}>
            <NavLink to="/admin">
              <i className="fa fa-solid fa-bag-shopping"></i>
              <span className="text">Admin</span>
            </NavLink>
          </li>
        </ul>

        <ul className="side-menu">
          <li className={location.pathname === "/setting" ? "active" : ""}>
            <NavLink to="/setting">
              <i className="fa fa-solid fa-gear "></i>
              <span className="text">Settings</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/" ? "active" : ""}>
            <NavLink to="/auth" className="logout">
              <i className="fa fa-solid fa-circle-user "></i>
              <span className="text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
