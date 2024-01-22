import React, { useState, useEffect } from "react";
import "../../../assets/css/admin/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleSidebar, toggleDarkMode }) => {
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSearchForm = (e) => {
    e.preventDefault();
    setSearchFormVisible(!isSearchFormVisible);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header id="content">
        <nav>
          <i className="fa fa-solid fa-bars" onClick={toggleSidebar}></i>
          <form>
            <div className="form-input">
              <input
                type="search"
                placeholder="Search..."
                style={{ fontSize: "15px" }}
              />
              <button
                type="submit"
                className="search-btn"
                onClick={toggleSearchForm}
              >
                <i
                  className={`fa ${
                    isSearchFormVisible ? "x-mark" : "fa-magnifying-glass"
                  }`}
                ></i>
              </button>
            </div>
          </form>
          <input
            type="checkbox"
            id="switch-mode"
            hidden
            onChange={toggleDarkMode}
          />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <NavLink to="/dashboard" className="profile">
            <img
              src={require("../../../assets/images/people.png")}
              alt="user"
            />
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
