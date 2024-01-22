import React from "react";
import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>our locations</h3>
            <NavLink>
              <i className="fas fa-map-marker-alt"></i> india
            </NavLink>
            <NavLink>
              <i className="fas fa-map-marker-alt"></i> USA
            </NavLink>
            <NavLink>
              <i className="fas fa-map-marker-alt"></i> russia
            </NavLink>
            <NavLink>
              <i className="fas fa-map-marker-alt"></i> france
            </NavLink>
            <NavLink>
              <i className="fas fa-map-marker-alt"></i> japan
            </NavLink>
            <NavLink>
              <i className="fas fa-map-marker-alt"></i> africa
            </NavLink>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <NavLink>
              <i className="fas fa-arrow-right"></i> home
            </NavLink>
            <NavLink>
              <i className="fas fa-arrow-right"></i> featured
            </NavLink>
            <NavLink>
              <i className="fas fa-arrow-right"></i> arrivals
            </NavLink>
            <NavLink>
              <i className="fas fa-arrow-right"></i> reviews
            </NavLink>
            <NavLink>
              <i className="fas fa-arrow-right"></i> blogs
            </NavLink>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <NavLink>
              <i className="fas fa-arrow-right"></i> account info
            </NavLink>
            <NavLink>
              <i className="fas fa-arrow-right"></i> ordered items
            </NavLink>
            <NavLink>
              <i className="fas fa-arrow-right"></i> privacy policy
            </NavLink>
            <NavLink>
              <i className="fas fa-arrow-right"></i> payment method
            </NavLink>
            <NavLink>
              <i className="fas fa-arrow-right"></i> our serivces
            </NavLink>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <NavLink>
              <i className="fas fa-phone"></i> +123-456-7890
            </NavLink>
            <NavLink>
              <i className="fas fa-phone"></i> +111-222-3333
            </NavLink>
            <NavLink>
              <i className="fas fa-envelope"></i> razishah918@gmail.com
            </NavLink>
            <img
              src={require("../../../assets/images/public/worldmap.png")}
              className="map"
              alt=""
            />
          </div>
        </div>

        <div className="share">
          <NavLink className="fab fa-facebook-f"></NavLink>
          <NavLink className="fab fa-twitter"></NavLink>
          <NavLink className="fab fa-instagram"></NavLink>
          <NavLink className="fab fa-linkedin"></NavLink>
          <NavLink className="fab fa-pinterest"></NavLink>
        </div>

        <div className="credit">
          created by <span>K-ADI</span> | all rights reserved!
        </div>
      </section>
    </>
  );
};

export default Footer;
