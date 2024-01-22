import React, { useState, useEffect } from "react";
import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../store/authToken";

const Navbar = () => {
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [isHeader2Fixed, setIsHeader2Fixed] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggleSearchForm = () => {
    setSearchFormActive(!searchFormActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;
      if (scrollPosition > threshold) {
        setIsHeader2Fixed(true);
      } else {
        setIsHeader2Fixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-1">
          <NavLink to="" className="logo">
            {" "}
            <i className="fas fa-book"></i> Bookly{" "}
          </NavLink>

          <form
            action=""
            className={`search-form ${searchFormActive ? "active" : ""}`}
          >
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div
              id="search-btn"
              className="fas fa-search"
              onClick={toggleSearchForm}
            ></div>
            <NavLink to="" className="fas fa-shopping-cart"></NavLink>
            {isLoggedIn ? (
              <NavLink
                to="/logout"
                className="fas fa-right-from-bracket"
              ></NavLink>
            ) : (
              <NavLink to="/login" className="fas fa-user"></NavLink>
            )}
          </div>
        </div>

        <div className={`header-2 ${isHeader2Fixed ? "active" : ""}`}>
          <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/library">Library</NavLink>
            <NavLink to="/new">New</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/reviews">Add Your Book</NavLink>
          </nav>
        </div>
      </header>

      {/* <!-- header section ends --> */}

      {/* <!-- bottom navbar  --> */}

      <nav className="bottom-navbar">
        <NavLink to="/" className="fas fa-home"></NavLink>
        <NavLink to="/library" className="fas fa-list"></NavLink>
        <NavLink to="/new" className="fas fa-tags"></NavLink>
        <NavLink to="/reviews" className="fas fa-comments"></NavLink>
        <NavLink to="/blogs" className="fas fa-blog"></NavLink>
      </nav>
    </>
  );
};

export default Navbar;
